import { nanoid } from "nanoid";
import db from "../Constents/dbconnectivity.js";
import { CreateJWT } from "../Utils/jwt.js";

export const Login = async (req, res) => {

    const {email, password} = req.body;
    try {
        const [results] = await db.execute('select * from users where email=?',[email]);
        if(results.length == 0) {
            res.status(401).json({msg:'Check your email'})
        }
        if(results[0].password === password){
            const user = results[0];
            const token = CreateJWT({useremail:user.email});
            const oneDay = 1000*60*60*60*24 

            res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + oneDay),
            secure: process.env.NODE_ENV === 'production',
            })


            res.json({token})
        } else {
            res.status(401).json({msg:'Check your password'});
        }
        
    }
    catch (er) {
        console.log(er);
        
    }   
    
}

export const Logout = (req, res) => {
    res.cookie('token', 'logout',{
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({msg:'User logged out'});
    
}

export const InsertVideo = async (req, res) => {
    const {title, url} = req.body;
    const ID = nanoid(20)

    try{
        const[results] = await db.execute('insert into videos(title,url,ID,updatedAt) value (?,?,?,CURRENT_TIMESTAMP)',[title,url,ID]);
        res.status(200).json({results})
    }
    catch(er){
        res.status(500).json({msg:'unable to insert video. try again later'})
    }
    
}

export const updateVideo = async (req,res) => {
    const {ID, title, url} = req.body;

    try{

        const [count] = await db.execute('select * from videos where ID=?',[ID]);

        if(count.length == 1){
            const [result] = await db.execute('update videos set title=?, url=?, updatedAt=CURRENT_TIMESTAMP where ID=?',[title,url,ID]);
            res.status(200).json(result)
        }else if(count.length == 0) {
            res.status(500).json({msg: 'No video found'})
        }else {
            res.status(500).json({msg: 'One ID has multiple video. Delete and reupload'});
        }

        
    }catch(er) {
        res.json({msg:'Unable to update. try again later'})
    }
}

export const DeleteVideo = async (req, res) => {
    const {ID} = req.body;
    try {
        const [count] = await db.execute('select * from videos where ID=?',[ID]);

        if(count.length == 1){
            const [result] = await db.execute('delete from videos where ID=?',[ID]);
            res.status(200).json(result)
        }else if(count.length == 0) {
            res.status(500).json({msg: 'No video found'})
        }else {
            res.json.status(500).json({msg: 'One ID has multiple video'});
        }

    }catch (er) {
        res.status(500).json({msg:'unable to delete. try again later', er})
    }
}