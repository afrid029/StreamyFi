import db from "../Constents/dbconnectivity.js";

export const GetAllVideo = async (req, res) => {

    try {
        const [results] = await db.execute('select * from videos order by updatedAt desc limit 8');
        res.status(200).json({results});
    }
    catch(er){
        res.status(500).json({msg:'Unable to fetch videos'});
        console.log(er);
        
    }

}

export const GetLiveStream = async (req, res) => {
    try {
        const [results] = await db.execute('select * from live order by updatedAt desc limit 1');
        res.status(200).json({results});
    }
    catch(er){
        res.status(500).json({msg:'Unable to fetch live stream'});
        console.log(er);
        
    }
}

export const GetLogo = async (req, res) => {
    await db.execute("select * from logo order by updatedAt desc limit 1").then((result) => {

        res.status(200).json({result});
    }).catch((er)=>{
        res.status(400).json({msg: "Unable to fetch Logo", er})
    })
}