import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import { getLoggedInUser } from '@/actions/getLoggedInUser';
import Listing from '@/models/Listing';
import Reservation from '@/models/Reservation';

interface IParams {
  listing?: string;
  user?: string;
  authorId?: string;
}

export const GET = async (
  request: Request,
  { params }: { params: IParams }
) => {
  try {
    await connectDB();

    const { listing, user, authorId } = params;

    const query: any = {};

    if (listing) {
      query.listing = listing;
    }

    if (user) {
      query.user = user;
    }

    if (authorId) {
      query.authorId = { user: authorId };
    }

    const reservations = await Reservation.find(query);

    const safeReservation = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toDateString(),
      endDate: reservation.endDate.toISOString(),
    }));

    return safeReservation;
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};

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
