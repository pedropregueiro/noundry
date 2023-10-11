import { PublicClient } from "viem";
import { nounsDescriptorContract } from "../../contracts/nounsDescriptor.js";
import { EncodedTrait, HexColor, OnchainArtwork } from "../../types/artwork.js";

export const fetchMainnetArtwork = async (
  publicClient: PublicClient
): Promise<OnchainArtwork> => {
  const [
    glassesCount,
    headsCount,
    accessoriesCount,
    bodiesCount,
    backgroundsCount,
  ] = await publicClient
    .multicall({
      contracts: [
        {
          ...nounsDescriptorContract,
          functionName: "glassesCount",
        },
        {
          ...nounsDescriptorContract,
          functionName: "headCount",
        },
        {
          ...nounsDescriptorContract,
          functionName: "accessoryCount",
        },
        {
          ...nounsDescriptorContract,
          functionName: "bodyCount",
        },
        {
          ...nounsDescriptorContract,
          functionName: "backgroundCount",
        },
      ],
    })
    .then((data) => data.map(({ result }) => Number(result)));

  const [glasses, heads, accessories, bodies, backgrounds, palettes] =
    await Promise.all([
      publicClient
        .multicall({
          contracts: new Array(glassesCount).fill(null).map((_, index) => ({
            ...nounsDescriptorContract,
            functionName: "glasses",
            args: [index],
          })),
        })
        .then((data) => data.map(({ result }, i) => result as EncodedTrait)),
      publicClient
        .multicall({
          batchSize: 100,
          contracts: new Array(headsCount).fill(null).map((_, index) => ({
            ...nounsDescriptorContract,
            functionName: "heads",
            args: [index],
          })),
        })
        .then((data) => data.map(({ result }) => result as EncodedTrait)),
      publicClient
        .multicall({
          contracts: new Array(accessoriesCount).fill(null).map((_, index) => ({
            ...nounsDescriptorContract,
            functionName: "accessories",
            args: [index],
          })),
        })
        .then((data) => data.map(({ result }) => result as EncodedTrait)),
      publicClient
        .multicall({
          contracts: new Array(bodiesCount).fill(null).map((_, index) => ({
            ...nounsDescriptorContract,
            functionName: "bodies",
            args: [index],
          })),
        })
        .then((data) => data.map(({ result }) => result as EncodedTrait)),
      publicClient
        .multicall({
          contracts: new Array(backgroundsCount).fill(null).map((_, index) => ({
            ...nounsDescriptorContract,
            functionName: "backgrounds",
            args: [index],
          })),
        })
        .then((data) => data.map(({ result }) => `#${result}` as HexColor)),
      publicClient
        .readContract({
          ...nounsDescriptorContract,
          functionName: "palettes",
          args: [0],
        })
        .then((data) => [
          data
            .slice(2)
            .match(/.{1,6}/g)!
            .map((hex, i) => (i === 0 ? "#00000000" : (`#${hex}` as HexColor))),
        ]),
    ]);

  return { accessories, bodies, backgrounds, glasses, heads, palettes };
};
