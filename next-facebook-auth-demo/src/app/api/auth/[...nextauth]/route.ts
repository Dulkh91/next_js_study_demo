import NextAuth from "next-auth";
import { authOption } from "@/lib/auth";

const handler = NextAuth(authOption)

export {handler as POST, handler as GET}