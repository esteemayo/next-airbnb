import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';
import { getLoggedInUser } from '@/actions/getLoggedInUser';
import Reservation from '@/models/Reservation';

interface IParams {
  reservationId: string;
}

export const DELETE = async (request, { params }: { params: IParams }) => {
  try {
    const currentUser = await getLoggedInUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const { reservationId } = params;

    if (!reservationId || typeof reservationId !== 'string') {
      throw new Error('Invalid ID');
    }

    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      return NextResponse.json('No reservation found with the given ID');
    }

    if (reservation.user === String(currentUser.name)) {
      await reservation.remove();
    }

    return NextResponse.json(reservation, {
      status: 204,
    });
  } catch (err: any) {
    return NextResponse.json(err.message, {
      status: 500,
    });
  }
};
