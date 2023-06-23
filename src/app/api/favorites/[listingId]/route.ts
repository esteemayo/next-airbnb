import { NextResponse } from 'next/server';

import connectDB from '@/utils/db';

interface IParams {
  listingId?: string;
}
