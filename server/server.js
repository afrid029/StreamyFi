import express from 'express';
import AdminRouter from "../server/Routers/User.js"

const App = express();
App.use(express.json());

App.get('/api/',(req, res) => {
    res.json({msg:'Working message'})
})
App.use('/api/admin/', AdminRouter)


App.listen(5100, () => {
    console.log('We are at 5100');
    
})