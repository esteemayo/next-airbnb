import mongoose from 'mongoose';

const db: string = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on('connect', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('disconnect', () => {
  console.log('MongoDB disconnected');
});

export default connectDB;
