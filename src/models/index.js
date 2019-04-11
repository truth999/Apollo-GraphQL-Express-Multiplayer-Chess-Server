import mongoose from 'mongoose';

import User from './user';
import Chess from './chess';

const connectDb = () => {
  const dbUrl = process.env.DATABASE_URL;
  return mongoose.connect(dbUrl, { useNewUrlParser: true });
};

const models = {
  User,
  Chess
};

export { connectDb };
export default models;
