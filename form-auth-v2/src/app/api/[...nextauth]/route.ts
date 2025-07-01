import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Import the authOptions from your lib/auth file

// Initialize NextAuth with your configuration options
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
