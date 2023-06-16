import GithubProvider from 'next-auth/providers/github';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/User';
import connectDB from '@/utils/db';

const handler = NextAuth({
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
      id: 'Credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        await connectDB();

        try {
          const user = await User.findOne({ email }).select('+password');
          const isComparedPassword = await bcrypt.compare(
            password,
            user.password
          );

          if (!user || !isComparedPassword) {
            throw new Error('Invalid credentials!');
          }

          return user;
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
});

export { handler as GET, handler as POST };
