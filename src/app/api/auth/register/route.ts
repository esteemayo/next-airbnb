import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

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

  const newUser = {
    name,
    email,
    password,
  };

  try {
    const user = await User.create({ ...newUser });

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
