import prisma from '@/libs/prismadb';
import Listing from '@/models/Listing';
import connectDB from '@/utils/db';

export default async function getListings() {
  try {
    await connectDB();
    const listings = await Listing.find().sort('-createdAt');

    // const listings = await prisma.listing.findMany({
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    // });

    const safeListings = listings.map((listing)=> ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (err: any) {
    throw new Error(err);
  }
}
