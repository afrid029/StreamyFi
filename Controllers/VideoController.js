// import db from "../Constents/dbconnectivity.js";

// export const GetAllVideo = async (req, res) => {

//     try {
//         const [results] = await db.execute('select * from videos order by updatedAt desc limit 8');

//         if (results.length == 0) {
//             throw new Error;
//         }
//         res.status(200).json(results);
//     }
//     catch(er){
//         res.status(500).json({msg:'Unable to fetch videos',er});
//         console.log(er);
        
//     }

// }

// export const GetLiveStream = async (req, res) => {
//     try {
//         const [results] = await db.execute('select * from live order by updatedAt desc limit 1');
//         res.status(200).json({results});
//     }
//     catch(er){
//         res.status(500).json({msg:'Unable to fetch live stream'});
//         console.log(er);
        
//     }
// }

// export const GetLogo = async (req, res) => {
//     await db.execute("select * from logo order by updatedAt desc limit 1").then((result) => {

//         res.status(200).json({result});
//     }).catch((er)=>{
//         res.status(400).json({msg: "Unable to fetch Logo", er})
//     })
// }


const createDbConnection = require("../Constents/dbconnectivity.js");

const GetAllVideo = async (req, res) => {
    let db;
    try {
        db = await createDbConnection(); // Establish DB connection
        db.execute('select * from videos order by updatedAt desc limit 8').then((result) => {
            res.status(200).json({ result: result[0]});
        }).catch((er) => {
            res.status(500).json({ msg: 'Unable to fetch Videos',er });
        })
        
    } catch (er) {
        res.status(500).json({ msg: 'Unable to fetch videos', er });
        console.log(er);
    }
};

const GetLiveStream = async (req, res) => {
   let db;
    try {
        db = await createDbConnection(); // Establish DB connection
        db.execute('select * from live order by updatedAt desc limit 1').then((result) => {
            res.status(200).json({ result: result[0] });
        }).catch ((er) => {
            res.status(500).json({ msg: 'Unable to fetch live stream',er });
        })
        
    } catch (er) {
        res.status(500).json({ msg: 'Unable to Connect DB' });
        console.log(er);
    }
};

const GetLogo = async (req, res) => {
   let db;
    try {
        db = await createDbConnection(); // Establish DB connection
        
        db.execute("select * from logo order by updatedAt desc limit 1")
        .then(result => {
    // Handle the result here
            //
            //console.log(result);
            //if(result)
            res.status(200).json({ result: result[0] })
         })
        .catch(error => {
    // Handle the error here
            console.error("Error executing query:", error);
             return res.status(404).json({ msg: "Logo not found" });
        });


    } catch (er) {
        // Log the error for debugging (use a proper logging mechanism in production)
        console.error("Error Connect DB:", er);

        // Send a more user-friendly message
        res.status(500).json({ msg: "Unable to Connect DB" });
        
    };
        
    
};

// Export functions using CommonJS
module.exports = {
    GetAllVideo,
    GetLiveStream,
    GetLogo
};
