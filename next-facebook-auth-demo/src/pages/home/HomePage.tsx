'use client'
import FacebookLogin from "@/components/FacebookLogin";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
const HomePage = () => {
    const {data: session, status} = useSession()
  if(status === 'loading') return <div>Loading...</div>
  if (session) {
      return(<div className="flex justify-center min-h-screen items-center">
        <div className=" relative border border-gray-50 rounded-sm p-5 w-1/4 h-86">
          <div>
            <h1>សូមស្វាគមន៍ {session.user?.name} </h1>
            {session.user?.image?(<Image src={session.user.image} alt="fb image"
                width={50} height={50} 
               className="  rounded-sm" 
            />)
            :(<span>no image</span>)}
          </div>

          <div className=" absolute bottom-2 left-25 ">
            <button onClick={()=>signOut()}
                className="text-center border p-2 w-2/1 rounded-sm cursor-pointer"
                >Log out</button>
          </div>
        </div>
      </div>)
  }

  return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="border border-gray-50 rounded-sm p-5 w-1/4 h-86">
          <div>
            <h1 className=" text-center border-b">Login with facebook</h1>
            <FacebookLogin/>
          </div>
        </div>
      </div>
  )

}
    
 
export default HomePage;