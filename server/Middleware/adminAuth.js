import { VerifyJWT } from "../Utils/jwt.js"

export const isAdminAction = (req, res, next) => {
    //const token = req.cookies.token;
    // if(!token){
    //     res.status(404).json({msg:'your are not authorised'});
    // }else {
    //     try {
    //         const {useremail} = VerifyJWT(token)
    //         console.log(useremail);
    //     //res.status(200).json({msg:'your are not authorised'});
    //         next();
    //     } catch (er) {
    //         res.json({msg:'something went wrong'})
    //     }
        
    // }

    next();
}


