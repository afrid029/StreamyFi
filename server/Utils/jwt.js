import jsonwebtoken from "jsonwebtoken";

export const CreateJWT = (payloads) =>{
    const token = jsonwebtoken.sign(payloads, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

export const VerifyJWT = (token) => {
    const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return user;
}