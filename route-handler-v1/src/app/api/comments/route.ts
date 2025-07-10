import { comments } from "@/lib/data";
import { NextResponse } from "next/server";
export const GET =  async () => {
    return NextResponse.json(comments);
}
 
