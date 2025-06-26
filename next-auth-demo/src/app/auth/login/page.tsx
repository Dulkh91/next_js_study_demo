"use client";
import { redirect } from "next/navigation";
import {signIn,useSession } from "next-auth/react";
const Login = () => {
    const {data: session} =  useSession()
    if(session){
       return redirect('/homepage')
    }
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Login</h1>
        <button
          className=" border border-gray-200 bg-sky-400 p-2"
          onClick={() => signIn("google")}
        >
          login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
