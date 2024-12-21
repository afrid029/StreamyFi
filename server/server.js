import express from 'express';
import db from './Constents/dbconnectivity.js';
import cors from 'cors'
import AdminRouter from "../server/Routers/User.js"
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { GetAllVideo } from './Controllers/VideoController.js';
dotenv.config();

const App = express();
const port = process.env.PORT || 5100; 

App.use(cors());
App.use(cookieParser())
App.use(express.json());



  // App.get('/api/',(req, res) => {
//     res.json({msg:'Working message'})
// })
App.use('/api/admin/', AdminRouter)
App.get('/api/test/', ((req, res) => {res.json({msg:'Hello Frontend'})}))
App.get('/api/user/getallvideo/', GetAllVideo);


  App.get('/api/users', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error fetching data' });
        return;
      }
      res.json(results);
    });
  });
  
  // Start the server
  App.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });



// App.listen(5100, () => {
//     console.log('We are at 5100');
    
// })