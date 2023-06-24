import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import User from '@/models/User';
import { getLoggedInUser } from '@/actions/getLoggedInUser';

interface IParams {
  listingId?: string;
}

export const POST = async (
  request: Request,
  { params }: { params: IParams }
) => {
  try {
    await connectDB();

    const currentUser = await getLoggedInUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }

    let user = await User.findOne({ email: currentUser.email });

    let favoriteIds = [...(user.favoriteIds || [])];

    favoriteIds.push(listingId);

    user = await User.findByIdAndUpdate(user._id, { $set: { favoriteIds } });

    return NextResponse.json(user, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
