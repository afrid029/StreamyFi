import { nanoid } from "nanoid";
import db from "../Constents/dbconnectivity.js";
import { CreateJWT } from "../Utils/jwt.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [results] = await db.execute("select * from users where email=?", [
      email,
    ]);
    if (results.length == 0) {
      console.log("No email");

      res.status(401).json({ msg: "Check your email" });
    } else if (results[0].password === password) {
      const user = results[0];
      const token = CreateJWT({ useremail: user.email });
      const oneDay = 1000 * 60 * 60 * 60 * 24;

      res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
      });

      res.json({ token });
    } else {
      res.status(401).json({ msg: "Check your password" });
    }
  } catch (er) {
    console.log(er);
  }
};

export const Logout = (req, res) => {
  res
    .cookie("token", "logout", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({ msg: "User logged out" });
};

export const InsertVideo = async (req, res) => {
  console.log(req);

  const { url, title, image } = req.body;

  //res.json({msg:'checking'})
  const ID = nanoid(20);
  const imgPath = req.file.path;
  //   console.log(req.file.path);

  await db
    .execute(
      "insert into videos(title,url,ID,image,updatedAt) value (?,?,?,?,CURRENT_TIMESTAMP)",
      [title, url, ID, imgPath]
    )
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((er) => {
      res
        .status(500)
        .json({ msg: "unable to insert video. try again later", er });
    });

  // res.json({msg:'ok'})

  // try{
  //     const[results] = await db.execute('insert into videos(title,url,ID,image,updatedAt) value (?,?,?,CURRENT_TIMESTAMP)',[title,url,ID]);
  //     res.status(200).json({results})
  // }
  // catch(er){
  //     res.status(500).json({msg:'unable to insert video. try again later'})
  // }
};

export const updateVideo = async (req, res) => {
  const { ID, title, url } = req.body;

  try {
    const [count] = await db.execute("select * from videos where ID=?", [ID]);

    if (count.length == 1) {
      const [result] = await db.execute(
        "update videos set title=?, url=?, updatedAt=CURRENT_TIMESTAMP where ID=?",
        [title, url, ID]
      );
      res.status(200).json(result);
    } else if (count.length == 0) {
      res.status(500).json({ msg: "No video found" });
    } else {
      res
        .status(500)
        .json({ msg: "One ID has multiple video. Delete and reupload" });
    }
  } catch (er) {
    res.json({ msg: "Unable to update. try again later", er });
  }
};

export const DeleteVideo = async (req, res) => {
  const { ID } = req.body;
  try {
    const [count] = await db.execute("select * from videos where ID=?", [ID]);

    if (count.length == 1) {
      const [result] = await db.execute("delete from videos where ID=?", [ID]);
      res.status(200).json(result);
    } else if (count.length == 0) {
      res.status(500).json({ msg: "No video found" });
    } else {
      res.json.status(500).json({ msg: "One ID has multiple video" });
    }
  } catch (er) {
    res.status(500).json({ msg: "unable to delete. try again later", er });
  }
};

export const LiveVideo = async (req, res) => {
  const { stream } = req.body;
  console.log(stream);

  await db
    .execute("insert into live(stream,updatedAt) value (?,CURRENT_TIMESTAMP)", [
      stream,
    ])
    .then((results) => {
      res.status(200).json({ results });
    })
    .catch((er) => {
      console.log(er);

      res
        .status(500)
        .json({ msg: "unable to insert Live stream. try again later" });
    });
};
