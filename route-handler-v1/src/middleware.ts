
import { NextResponse } from "next/server"
import  type  { NextRequest } from "next/server"

export function middleware(req: NextRequest){
        if(req.nextUrl.pathname === '/profile'){
             return NextResponse.redirect( new URL("/limit-page", req.nextUrl))
        }

       
}

