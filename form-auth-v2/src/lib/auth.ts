// src/lib/auth.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt"; // Import JWT type
import type { User } from "next-auth"; // Import User type


const mockUsers = [
  { id: "1", email: "user1@example.com", password: "password123", name: "User One" },
  { id: "2", email: "user2@example.com", password: "password456", name: "User Two" },
];


export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma), // Uncomment and configure if using Prisma/database
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const user = mockUsers.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null; // Return null if user not found or credentials invalid
        }
      },
    }),
  ],


  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | null }) { // Explicitly type token and user
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },


    async session({ session, token }: { session: any; token: JWT }) { // Explicitly type session and token
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },


  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "SUPER_SECRET_FOR_CANVAS_DEMO_ONLY", // Use actual env var in production
  debug: process.env.NODE_ENV === "development",
};
