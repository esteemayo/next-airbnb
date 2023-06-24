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

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  try {
    const user = await User.create({ ...newUser });

    if (user) {
      return NextResponse.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      }, {
        status: 201,
      });
    }
  } catch (err) {
    return NextResponse.json(err, {
      status: 500,
    });
  }
};
