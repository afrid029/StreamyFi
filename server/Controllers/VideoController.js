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