import { NextAuthOptions } from 'next-auth'
import FacbookProvider from 'next-auth/providers/facebook'

export const authOption: NextAuthOptions ={
    providers:[
        //GoogleProvider({..}),
        FacbookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        })
    ],
    pages: {
    signIn: "/auth/signin",
  }
}


