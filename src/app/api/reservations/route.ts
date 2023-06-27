import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import { getLoggedInUser } from '@/actions/getLoggedInUser';
import Listing from '@/models/Listing';
import Reservation from '@/models/Reservation';

export const POST = async (request: Request) => {
  const currentUser = await getLoggedInUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { startDate, endDate, totalPrice, listing } = body;

  if (!startDate || !endDate || !totalPrice || !listing) {
    return NextResponse.error();
  }

  const newReservation = {
    startDate,
    endDate,
    totalPrice,
    listing,
    user: currentUser.email,
  };

  try {
    await connectDB();

    const reservationPromise = Reservation.create({ ...newReservation });
    const newListingPromise = Listing.findByIdAndUpdate(listing, {
      $push: { reservations: newReservation },
    });

    const [reservation, newListing] = await Promise.all([
      reservationPromise,
      newListingPromise,
    ]);

    return NextResponse.json(
      { reservation, newListing },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
};
