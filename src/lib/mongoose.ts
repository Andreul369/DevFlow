import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    return console.log('Missing MONGODB_URL environment variable.');
  }

  // if (isConnected) {
  //   return console.log('MongoDB is already connected.');
  // }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'DevFlow',
    });
    isConnected = true;
    // console.log('MongoDB is now connected.');
  } catch (error) {
    console.log('MongoDB connection failed', error);
  }
};
