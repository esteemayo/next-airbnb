import prisma from '@/libs/prismadb';
import Listing from '@/models/Listing';

export default async function getListings() {
  try {
    const listings = await Listing.find().sort('-createdAt');

    // const listings = await prisma.listing.findMany({
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    // });

    return listings;
  } catch (err: any) {
    throw new Error(err);
  }
}
