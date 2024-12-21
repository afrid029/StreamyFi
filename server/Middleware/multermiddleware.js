import multer from "multer";
import path from "path";

 const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/upload');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

export const upload = multer({ storage });


const storage2 = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/upload/logo');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
})

export const upload2 = multer({ storage2 });
