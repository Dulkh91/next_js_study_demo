"use client";
import { useSession, signIn, signOut } from "next-auth/react";
const HomePage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    console.log(session);
    return (
      <div className="flex items-center justify-center min-h-screen p-5">
        <div className="w-54 h-64 border border-gray-50 p-5 rounded-sm relative">
          <p>សួស្តី {session.user?.name}! 🥳</p>
          <button 
            className=" absolute bottom-2 left-0 border border-gray-100 text-center w-3/4 cursor-pointer"
          onClick={() => signOut()}>ចេញពីគណនី</button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="w-54 h-64 border border-gray-50 p-5 rounded-sm relative">
        <p>អ្នកមិនទាន់ login ទេ។</p>
        <button 
            className="absolute bottom-2 left-0 border border-gray-100 text-center w-3/4 cursor-pointer"
        onClick={() => signIn("google")}>Login with Google</button>
      </div>
    </div>
  );
};

export default HomePage;
