import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials:", credentials);
          throw new Error(JSON.stringify({ message: "Missing email or password" }));
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!user) {
          console.log("User not found:", credentials.email);
          throw new Error(JSON.stringify({ message: "Invalid email or password" }));
        }

        if (!user.password) {
          console.log("No password for user:", user.email);
          throw new Error(JSON.stringify({ message: "Invalid email or password" }));
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          console.log("Password mismatch for:", credentials.email);
          throw new Error(JSON.stringify({ message: "Invalid email or password" }));
        }

        console.log("User authenticated:", user.email);
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login", // ធានាថាផ្លូវនេះត្រឹមត្រូវ និងមានឯកសារ login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          name: token.name as string | null,
        };
      }
      return session;
    },
  },
  debug: true, // បន្ថែម Debug Logs ដើម្បីឃើញបញ្ហា
};