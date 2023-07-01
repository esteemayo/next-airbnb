import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Listing from '@/models/Listing';
import User from '@/models/User';
import { getLoggedInUser } from '@/actions/getLoggedInUser';

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const currentUser = await getLoggedInUser();

    if (!currentUser) {
      return [];
    }

    const user = await User.findOne({ email: currentUser.email });
    const favListings = user.favoriteIds;
    const favorites = await Promise.all(
      favListings.map((favoriteId: string) => {
        return Listing.findById(favoriteId);
      })
    );

    return NextResponse.json(favorites, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
