import prisma from '@/libs/prismadb';

interface IParams {
  listingId: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        User: true,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.User,
        createdAt: listing.User?.createdAt.toISOString(),
        updatedAt: listing.User?.updatedAt.toISOString(),
        emailVerified: listing.User?.emailVerified?.toISOString() || null,
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
