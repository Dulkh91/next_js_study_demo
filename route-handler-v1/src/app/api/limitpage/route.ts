import { NextResponse } from "next/server"
import { comments } from "@/lib/data"


export const GET = async (req: Request)=>{
    const {searchParams} = new URL(req.url);
    const limit =  searchParams.get('limit');

    const filteredComment = limit
    ?comments.slice(- Number(limit)).reverse()
    :comments
    
    if(!Array.isArray(filteredComment)){
        return NextResponse.json({error:"Invalid data"},{status: 500})
    }

    return NextResponse.json(filteredComment);

}


//http://localhost:3000/api/limitpage?limit=2
