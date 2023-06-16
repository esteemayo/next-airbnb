import mongoose from 'mongoose';
const { Schema } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'A list item must have a title'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A list item must have a description'],
  },
  imageSrc: {
    type: String,
  },
  category: {
    type: String,
    required: [true, 'A list item must belong to a category'],
  },
  roomCount: {
    type: Number,
    required: [true, 'A list item must have a room count'],
  },
  bathroomCount: {
    type: Number,
    required: [true, 'A list item must have a bathroom count'],
  },
  guestCount: {
    type: Number,
    required: [true, 'A list item must have a guest count'],
  },
  locationValue: {
    type: String,
    required: [true, 'A list item must have a location'],
  },
  price: {
    type: Number,
    required: [true, 'A list item must have a price'],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  reservations: {
    type: mongoose.Types.ObjectId,
    ref: 'Reservation',
  },
});

const Listing =
  mongoose.models.Listing || mongoose.model('Listing', listingSchema);

export default Listing;
