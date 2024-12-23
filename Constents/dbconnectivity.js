// import mysql from 'mysql2/promise';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const db = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   });


//   export default db;

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Use an async function to create the DB connection with try-catch error handling
async function createDbConnection() {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    return db;
  } catch (error) {
    // Handle error if connection fails
    console.error("Error connecting to the database:", error.message);
    throw new Error("Database connection failed");
  }
}

// Export the function to connect to the DB
module.exports = createDbConnection;