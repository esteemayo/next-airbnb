import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/route';

export async function getLoggedInUser() {
  const session = await getServerSession(options);
  console.log(session.user);
  return session.user
}
