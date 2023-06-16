import mongoose, { Date } from 'mongoose';
const { Schema } = mongoose;

const reservationSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: [true, 'A reservation must have a start date'],
    },
    endDate: {
      type: Date,
      required: [true, 'A reservation must have an end date'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'A reservation must have a total price'],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    listing: {
      type: mongoose.Types.ObjectId,
      ref: 'Listing',
    },
  },
  {
    timestamps: true,
  }
);

const Reservation =
  mongoose.models.Reservation ||
  mongoose.model('Reservation', reservationSchema);

export default Reservation;
