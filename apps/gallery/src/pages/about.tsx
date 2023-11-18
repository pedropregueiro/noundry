"use client";
import FarcasterIcon from "@/assets/icons/farcaster.svg";
import Image from "next/image";
import Banner from "public/pixel-heart.svg";
import { FaTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="container w-full max-w-4xl mx-auto px-4 gap-8 flex flex-col py-4 pt-8">
        <div className="flex items-center justify-center dsm:justify-between">
          <Banner className="text-black w-full h-auto select-none" />
        </div>

        <div className="flex flex-col gap-4 text-lg">
          <div className="flex flex-col gap-4">
            <p className="text-xl my-2 ">
              Upload your 32x32 pixel images as transparent PNGs, style them
              using existing NounsDAO assets, and share them with the community!{" "}
            </p>

            <p className="text-xl my-2 ">
              No strings attached: you retain all rights to your art until you
              choose to submit it to the DAO through a{" "}
              <a
                href="https://nouns.wtf/vote#candidates"
                className=" hover:!text-primary underline"
                target="_blank"
              >
                candidate proposal
              </a>
              {""}. If the candidate is sponsored, goes onchain and succeeds,
              your artwork is added to NounsDAO collection, and becomes CC0.{" "}
            </p>
          </div>
          <div className="mt-8 mb-2 bg-bright-light dark:bg-off-dark p-6 leading-24 ">
            <p className="py-2"> Future Features: </p>
            <li className="">
              One-click process to submit candidate proposals to NounsDAO
            </li>
            <li className="">
              Farcaster, Twitter and Discord bots letting the community know
              about newly uploaded traits
            </li>
            <li className="">Comments under traits</li>
            <li className="">
              Integration with{" "}
              <a
                href="https://studio.noundry.wtf/"
                className=" hover:!text-primary underline"
                target="_blank"
              >
                Noundry Studio
              </a>{" "}
            </li>
          </div>

          <div>
            <p className="mb-2 text-md">
              {" "}
              This project is funded by Nouns via{" "}
              <a
                href="https://nouns.wtf/vote/375"
                className=" hover:!text-primary underline"
                target="_blank"
              >
                proposal #375
              </a>
              {""}.
            </p>
          </div>

          <div>
            <p className="mb-2 text-md">
              {" "}
              Get in touch with us on Twitter or Discord if you want to share
              some feedback or features requests.
            </p>
          </div>

          <div className="profile-section-creators">
            <div className="profile-individual-section">
              <Image
                className="px-2 py-2"
                src="/coralPFP.png"
                alt="coral"
                width={250}
                height={250}
                unoptimized
              />
              <div className="inline-flex">
                <p className="mx-2">Coralorca</p>
                <div className="px-2 pt-1">
                  <a href="https://twitter.com/coralorca" target="_blank">
                    <FaTwitter />
                  </a>
                </div>
                <div className="px-2 pt-1">
                  <a href="https://warpcast.com/coralorca" target="_blank">
                    <FarcasterIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-individual-section">
              <Image
                className="px-2 py-2"
                src="/volkyPFP.png"
                alt="volky"
                width={250}
                height={250}
                unoptimized
              />
              <div className="inline-flex">
                <p className="mx-2">Volky.eth</p>
                <div className="px-2 pt-1">
                  <a href="https://twitter.com/volkyeth" target="_blank">
                    <FaTwitter />
                  </a>
                </div>
                <div className="px-2 pt-1">
                  <a href="https://warpcast.com/volky" target="_blank">
                    <FarcasterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
