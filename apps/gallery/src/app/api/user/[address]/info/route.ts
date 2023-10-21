import { addressSchema } from "@/schemas/common";
import { NextRequest, NextResponse } from "next/server";
import { getUserInfo } from "./getUserInfo";

export const GET = async (req: NextRequest, { params }) => {
  const address = addressSchema.parse(params.address) as `0x${string}`;

  return NextResponse.json(await getUserInfo(address));
};
