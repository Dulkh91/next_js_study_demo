
import { redirect } from "next/navigation"
export const GET = async(req: Request)=>{
     redirect('/api/comments')   
    return new Response (JSON.stringify({"message": "redirect"}))
   
}