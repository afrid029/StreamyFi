// import multer from "multer";
// import path from "path";

//  const storage = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, './public/upload');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// })

// export const upload = multer({ storage });


// const storage2 = multer.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, './public/upload/logo');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// })

// export const upload2 = multer({ storage2 });


const multer = require('multer');
const path = require('path');

// First storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Export the first upload configuration
const upload = multer({ storage });

// Second storage configuration for logo uploads
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload/logo');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// Export the second upload configuration
const upload2 = multer({ storage2 });

// Export both upload configurations
module.exports = {
    upload,
    upload2
};