const Calorie = require('../models/calorie');
const mongoose = require('mongoose');


exports.addCalories = async (req, res) => {
  try {
    const { user_id, year, month, day, description, category, amount } = req.body;
    const id = new mongoose.Types.ObjectId();
    const newCalorie = new Calorie({
      user_id,
      year,
      month,
      day,
      id,
      description,
      category,
      amount,
    });
    await newCalorie.save();
    res.status(201).json(newCalorie);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getReport = async (req, res) => {
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
        day: calorie.day,
        description: calorie.description,
        amount: calorie.amount,
      });
    });

    res.json(report);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getAbout = (req, res) => {
  res.json([
    { firstname: 'dave', lastname: 'cohen', id: 234234, email: 'daddd@gmail.com' },
    { firstname: 'tal', lastname: 'levy', id: 34534544, email: 'tal@gmail.com' },
  ]);
};
