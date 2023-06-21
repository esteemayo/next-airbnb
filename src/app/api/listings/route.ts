import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Listing from '@/models/Listing';

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const listings = await Listing.find();
    return NextResponse.json(listings, {
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  Object.keys(body).forEach((item: any) => {
    if (!body[item]) {
      return NextResponse.error();
    }
  });

  const newListing = {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    locationValue: location.value,
    price: parseInt(price, 10),
  };

  try {
    await connectDB();

    const listing = await Listing.create({ ...newListing });
    return NextResponse.json(listing, {
      status: 201,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
