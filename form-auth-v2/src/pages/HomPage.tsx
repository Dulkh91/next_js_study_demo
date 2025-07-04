'use client'

import { useSession, signOut } from "next-auth/react";
const HomePage = () => {
    const {data: session, status} = useSession()
    if(status === 'loading'){
        return <div>Loading....</div>
    }
    if(!session?.user){
        return (<div className=" bg-sky-300 p-5 flex justify-between">
            <div>
                <h1>Home page</h1>
            </div>
            <div className="flex gap-3">
               
                <button><a href="/login">Login</a></button>
                <button><a href="/signup">Create account</a></button>
            </div>
        </div>)
    }
    return ( <div className=" bg-sky-300 p-5 flex justify-between">
        <div>
            <h1 className=" font-bold ">Home page</h1>
        </div>
        <div className="flex gap-4">
            <p>{session?.user?.name}</p>
            <button onClick={()=> signOut()} className=" cursor-pointer">Sign Out</button>
        </div>
    </div> );
}
 
export default HomePage;