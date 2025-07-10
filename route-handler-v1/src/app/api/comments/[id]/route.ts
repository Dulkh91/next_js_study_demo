import { NextResponse } from "next/server"
import { comments } from "@/lib/data"

export const GET = async (req: Request, {params}:{params:{id:string}})=>{
    const id = params.id
   const comment =  comments.find(com=> com.id === id)

   if(!comment){ //=> (comment === undefined) 
    return NextResponse.json({message:"Invalid Data"},{status: 404})
   }

    return NextResponse.json(comment)

}

// PATCH the similar put method
interface Comment{
    text: string
}
export const PATCH = async (req:Request, {params}: {params:{id: string}})=>{
    const {text}: Partial<Comment> = await req.json()
    const index = comments.findIndex(c=>c.id === params.id)
    if(index === -1){
        return NextResponse.json({message:"Data not found"},{status: 404})
    }

    const updataComment = {
        ...comments[index], text: text || comments[index].text
    }
    
    comments[index] = updataComment

    return Response.json(updataComment)

}