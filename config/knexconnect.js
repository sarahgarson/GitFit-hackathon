const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    // ssl: { rejectUnauthorized: false },
  },
});

//-----------------------------------------------

// Example function to get data from a table
const getExercises = async () => {
  try {
    const exercises = await db.select("*").from("exercises");
    return exercises;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
};

const getMealComponents = async () => {
  try {
    const components = await db.select("*").from("mealComponents");
    return components;
  } catch (error) {
    console.error("Error fetching meal components:", error);
    throw error;
  }
};

//----------------------------------------------

module.exports = {
  db,
  getExercises,
  getMealComponents,
};
