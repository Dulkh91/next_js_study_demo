import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions ={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
    signIn: "/auth/signin", // តំណទីតាំងសម្រាប់ UI page ចូលផ្ទាល់
  },
}



