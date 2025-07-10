

export const GET = async(req: Request) =>{

   const userAgent = req.headers.get("user-agent")
    // const referer = req.headers.get("referer")
    const authHead = req.headers.get('Authorization')
    return new Response ( JSON.stringify({userAgent, authHead}),{
        headers:{'Content-Type': 'application/json'}
    })


}


 