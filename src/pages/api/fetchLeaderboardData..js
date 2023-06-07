import fetchLeaderboardDataDB from "../../../lib/fetchLeaderboardDataDB";
import mongoConnect from "../../../lib/mongoConnect";
export default async function fetchLeaderboardData(req,res){
    try{
        if(req.body){
            const quizId = req.body.quizId;
            await fetchLeaderboardDataDB(quizId)
        }
    }catch(err){
        console.log(err)
        res.send({status:false})
    }
}