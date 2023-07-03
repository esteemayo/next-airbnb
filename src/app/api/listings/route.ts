import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import Listing from '@/models/Listing';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const user = searchParams.get('userId');
  const guestCount = searchParams.get('guestCount');
  const roomCount = searchParams.get('roomCount');
  const bathroomCount = searchParams.get('bathroomCount');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const locationValue = searchParams.get('locationValue');
  const category = searchParams.get('category');

  try {
    await connectDB();

    const listings = await Listing.find(user && { user });
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
