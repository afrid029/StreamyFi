import { VerifyJWT } from "../Utils/jwt.js"

export const isAdminAction = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        res.json({msg:'your are not authorised',auth: false});
    }else {
        try {
            const {useremail} = VerifyJWT(token)
            console.log(useremail);
            //res.status(200).json({msg:'your are not authorised'});
            req.user = {useremail};
            next();
        } catch (er) {
            res.json({msg:'something went wrong', auth: false})
        }
        
    }

    //next();
}


