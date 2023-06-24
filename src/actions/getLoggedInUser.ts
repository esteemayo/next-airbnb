import { getServerSession } from 'next-auth/next';
import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';

export async function getLoggedInUser() {
  const session = await getServerSession(OPTIONS);
  console.log(session.user);
  const user = session.user;
  return user;
}
