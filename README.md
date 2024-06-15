# Calories Manager

Calories Manager is a RESTful web service for managing daily calorie consumption. 
It allows users to add calorie consumption items, retrieve detailed reports for specific months, and get information about specific users.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features

- Add new calorie consumption items
- Retrieve detailed reports of calorie consumption for specific months and years
- Get detailed information about specific users
- Get information about the developers

## Requirements

- Node.js
- MongoDB Atlas
- Postman (for testing API endpoints)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/calories-manager.git
cd calories-manager

2. Install the dependencies:
npm install

3.Set up MongoDB Atlas and configure your .env file (see Configuration section).

## Configuration

Create a .env file in the root directory of the project.
Add your MongoDB connection string to the .env file:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your actual MongoDB credentials and database name.

## Usage

1.Run the database setup script to create collections and insert initial data:
node setupDB.js
2.start the server :
node server.js
3.Use Postman or any other API client to test the API endpoints.

## API Endpoints-

#POST /addcalories
Add a new calorie consumption item.

URL: /addcalories
Method: POST
Body:{
  "user_id": "123123",
  "year": 2024,
  "month": 6,
  "day": 15,
  "description": "Example food item",
  "category": "breakfast",
  "amount": 250
}

#GET /users/
Get detailed information about a specific user.

URL: /users/:id
Method: GET
Response: ##or similar {
  "id": "123123",
  "first_name": "moshe",
  "last_name": "israeli",
  "birthday": "1990-01-10T00:00:00.000Z"
}

#GET /report
Get a detailed report of calorie consumption for a specific month and year.

URL: /report
Method: GET
Query Parameters: user_id, year, month
Response:{
  "breakfast": [
    { "day": 21, "description": "chocolate in ikea", "amount": 300 },
    { "day": 5, "description": "milk", "amount": 6 }
  ],
  "lunch": [],
  "dinner": [],
  "other": []
}

#GET /about
Get information about the developers.

URL: /about
Method: GET
Response:[
  { "firstname": "dave", "lastname": "cohen", "id": 234234, "email": "daddd@gmail.com" },
  { "firstname": "tal", "lastname": "levy", "id": 34534544, "email": "tal@gmail.com" }
]

