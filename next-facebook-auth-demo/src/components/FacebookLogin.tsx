"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import facebookIcon from "../../public/facebookIcon.svg";
const FacebookLogin = () => {
  return (
    <div>
      <button className=" cursor-pointer" onClick={() => signIn("facebook")}>
        <Image src={facebookIcon} alt="facebookLogo" />
      </button>
    </div>
  );
};

export default FacebookLogin;
