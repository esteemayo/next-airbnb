import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import { getLoggedInUser } from '@/actions/getLoggedInUser';
import Listing from '@/models/Listing';

interface IParams {
  listingId: string;
}

export const GET = async (
  request: Request,
  { params }: { params: IParams }
) => {
  try {
    await connectDB();

    const { listingId } = params;

    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }

    const listing = await Listing.findById(listingId);

    return NextResponse.json(listing, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};

export const DELETE = async (
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

    const listing = await Listing.findById(listingId);

    if (!listing) {
      return NextResponse.json('No listing found with the given ID', {
        status: 404,
      });
    }

    if (listing.user === String(currentUser.name)) {
      await listing.remove();
    }

    return NextResponse.json(listing, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
