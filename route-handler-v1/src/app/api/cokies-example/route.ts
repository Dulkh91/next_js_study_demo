import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest)=>{
   
    const theme = req.cookies.get('theme')?.value

    return NextResponse.json(theme)

    
}

export const POST = async(req: NextRequest)=>{
    const {username, password} = await req.json()
    if(username === "admin" && password=== "123"){
        const response = NextResponse.json({success: true})

        response.cookies.set('session', 'user_authenticated',{
            path:'/',
            maxAge:86400,
            httpOnly: true
        })
        return response
    }

    return NextResponse.json({'error':'ឈ្មោះអ្នកប្រើប្រាស់ ឬ លេខសំងាត់មិនត្រឹមត្រូវ'},{status:401})
    
    
}