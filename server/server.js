import express from 'express';
import db from './Constents/dbconnectivity.js';
import cors from 'cors'
import AdminRouter from "../server/Routers/User.js"
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { GetAllVideo, GetLiveStream, GetLogo } from './Controllers/VideoController.js';
dotenv.config();

import path, {dirname} from 'path'
import { fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))



const App = express();
const port = process.env.PORT || 5100; 

App.use('/public',express.static(path.join(__dirname, 'public')));
App.use(cors());
App.use(cookieParser())
App.use(express.json());



  // App.get('/api/',(req, res) => {
//     res.json({msg:'Working message'})
// })
App.use('/api/admin/', AdminRouter);
App.get('/api/user/getallvideo/', GetAllVideo);
App.get('/api/user/getstream/', GetLiveStream);
App.get('/api/user/getlogo/', GetLogo);


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