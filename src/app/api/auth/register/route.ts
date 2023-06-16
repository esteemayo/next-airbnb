import { NextResponse } from 'next/server';

import prisma from '@/libs/prismadb';
import User from '@/models/User';
import connectDB from '@/utils/db';

interface UserInputs {
  name: string;
  email: string;
  password: string;
}

export const POST = async (request: Request) => {
  const body = await request.json();
  const { name, email, password }: UserInputs = body;

  await connectDB();

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      return NextResponse.json(user, {
        status: 201,
      });
    }
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
