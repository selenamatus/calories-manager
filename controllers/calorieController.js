const Calorie = require('../models/calorie');
const mongoose = require('mongoose');

// Add new calorie consumption item
const addCalories = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, amount } = req.body;
    const customId = new mongoose.Types.ObjectId().toString(); // Generate a custom ID
    const newCalorie = new Calorie({
      user_id,
      year,
      month,
      day,
      id: customId, // Assign the custom ID
      description,
      category,
      amount,
    });
    await newCalorie.save();
    res.status(201).json(newCalorie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Generate report for specific user, year, and month
const getReport = async (req, res) => {
  try {
    const { user_id, year, month } = req.query;
    const report = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: [],
    };

    const calories = await Calorie.find({ user_id, year, month });
    calories.forEach((calorie) => {
      report[calorie.category].push({
        _id: calorie._id, // MongoDB ID
        id: calorie.id, // Custom ID
        day: calorie.day,
        description: calorie.description,
        amount: calorie.amount,
      });
    });

    res.json(report);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get developer information
const getAbout = (req, res) => {
  res.json([
    { firstname: 'dave', lastname: 'cohen', id: 234234, email: 'daddd@gmail.com' },
    { firstname: 'tal', lastname: 'levy', id: 34534544, email: 'tal@gmail.com' },
  ]);
};

module.exports = { addCalories, getReport, getAbout };
