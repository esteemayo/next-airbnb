import GithubProvider from 'next-auth/providers/github';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/User';
import connectDB from '@/utils/db';

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'user@email.com',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;

        try {
          if (!email || !password) {
            throw new Error('Invalid credentials!');
          }

          const user = await User.findOne({ email }).select('+password');
          const isComparedPassword = await bcrypt.compare(
            password,
            user.password
          );

          if (!user || !isComparedPassword) {
            throw new Error('Invalid credentials!');
          }

          return {
            id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
    error: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
