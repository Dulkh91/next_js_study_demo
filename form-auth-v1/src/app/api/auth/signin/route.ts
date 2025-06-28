import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const POST = async (req: Request) =>{
    const {email, password} = await req.json()

    // Validate input
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({where:{email}})

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate JWT token (optional, for session management)
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string, // Add JWT_SECRET to .env
      { expiresIn: '1h' }
    );


    // Return user data and token
    return NextResponse.json({
      message: 'Sign in successful',
      user: { id: user.id, email: user.email, name: user.name },
      token,
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'An error occurred during sign in' }, { status: 500 });

  }
}