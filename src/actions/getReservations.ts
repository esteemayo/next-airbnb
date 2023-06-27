import prisma from '@/libs/prismadb';

interface IParams {
  listing?: string;
  user?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listing, user, authorId } = params;

    const query: any = [];

    if (listing) {
      query.listing = listing;
    }

    if (user) {
      query.user = user;
    }

    if (authorId) {
      query.authorId = { user: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        Listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeReservation = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toDateString(),
      endDate: reservation.endDate.toISOString(),
      Listing: {
        ...reservation.Listing,
        createdAt: reservation.Listing?.createdAt.toISOString(),
      },
    }));

    return safeReservation;
  } catch (err: any) {
    throw new Error(err);
  }
}
