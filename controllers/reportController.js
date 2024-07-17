//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const Calorie = require('../models/calorie');

exports.getReport = async (req, res) => {
  const { user_id, year, month } = req.query;

  try {
        // Fetching calorie items from the database for the specified user, year, and month
    const calories = await Calorie.find({ user_id, year, month });
    const report = { breakfast: [], lunch: [], dinner: [], other: [] };
  
     // Organizing the fetched calorie items into categories
    calories.forEach(cal => {
      report[cal.category].push({ day: cal.day, description: cal.description, amount: cal.amount });
    });

    res.json(report);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
