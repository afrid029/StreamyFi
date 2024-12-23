// import jsonwebtoken from "jsonwebtoken"

// // j
// export const CreateJWT = (payloads) =>{
//     const token = jsonwebtoken.sign(payloads, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return token;
// }

// export const VerifyJWT = (token) => {
//     const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
//     return user;
// }

const jsonwebtoken = require("jsonwebtoken");

// Create JWT
const CreateJWT = (payloads) => {
  const token = jsonwebtoken.sign(payloads, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

// Verify JWT
const VerifyJWT = (token) => {
  const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
  return user;
};

// Export functions using CommonJS
module.exports = { CreateJWT, VerifyJWT };
