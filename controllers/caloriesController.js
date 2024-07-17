//Ofek Daida ID 315143958 , Daniella Aharonov ID: 314750621, Selena Matusevich ID: 206511503

const Calorie = require('../models/calorie');

exports.addCalories = async (req, res) => {
  // Get the calorie item details from the request body
  const { user_id, year, month, day, description, category, amount } = req.body;
  
  // Create a new calorie item
  const newCalorie = new Calorie({
    user_id,
    year,
    month,
    day,
    id: new Date().getTime(), // Generate a unique ID
    description,
    category,
    amount
  });

  try {
    // Save the new calorie item to the database
    await newCalorie.save();
    res.status(201).send('Calorie item added');
  } catch (error) {
    res.status(400).send(error.message);
  }
};