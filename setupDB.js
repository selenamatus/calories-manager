const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const userSchema = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  birthday: Date,
});

const calorieSchema = new mongoose.Schema({
  user_id: String,
  year: Number,
  month: Number,
  day: Number,
  id: String,
  description: String,
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'other'],
  },
  amount: Number,
});

const User = mongoose.model('User', userSchema);
const Calorie = mongoose.model('Calorie', calorieSchema);

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

const insertInitialData = async () => {
  const initialUser = new User({
    id: '11111',
    first_name: 'bdika',
    last_name: 'bdika',
    birthday: new Date('1990-01-10'),
  });

  try {
    await initialUser.save();
    console.log('Initial user data inserted...');
  } catch (err) {
    console.error('Error inserting initial data:', err.message);
  }
};

const setup = async () => {
  await connectDB();
  await insertInitialData();
  mongoose.connection.close();
};

setup();
