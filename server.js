// import express from 'express';
// import db from './Constents/dbconnectivity.js';
// import cors from 'cors';
// import AdminRouter from './Routers/User.js';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import { GetAllVideo, GetLiveStream, GetLogo } from './Controllers/VideoController.js';
// import path, {dirname} from 'path';
// import { fileURLToPath } from 'url';

// // Load environment variables from .env file
// dotenv.config();

// // ES6 module handling for __dirname

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = process.env.PORT || 5102;

// // Middleware
// app.use(express.static(path.resolve(__dirname, './public')));
// app.use(cors());
// app.use(cookieParser());
// app.use(express.json());

// // Routes
// app.use('/api/admin/', AdminRouter);
// app.get('/api/user/getallvideo/', GetAllVideo);
// app.get('/api/user/getstream/', GetLiveStream);
// app.get('/api/user/getlogo/', GetLogo);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
// });


// app.use('*', (req, res) => {
//   res.status(404).json({error: 'Page not found'});
// })

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });




// Replace 'import' statements with 'require'
const express = require('express');
const db = require('./Constents/dbconnectivity.js');
const cors = require('cors');
const AdminRouter = require('./Routers/User.js');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { GetAllVideo, GetLiveStream, GetLogo } = require('./Controllers/VideoController.js');
const path = require('path');

//const __dirname = path.resolve(); // CommonJS way to get the current directory

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5100;

// Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/hello/', (req,res) => {
    res.json({msg:'Hello world'});
})

// Routes
app.use('/api/admin/', AdminRouter);
app.get('/api/user/getallvideo/', GetAllVideo);
app.get('/api/user/getstream/', GetLiveStream);
app.get('/api/user/getlogo/', GetLogo);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

// app.use('*', (req, res) => {
//   res.status(404).json({error: 'Page not found'});
// })

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
