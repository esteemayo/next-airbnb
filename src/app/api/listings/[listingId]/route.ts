import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
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
