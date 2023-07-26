import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

import fetchLeaderboardDataDB from "../../../lib/fetchLeaderboardDataDB";
import mongoConnect from "../../../lib/mongoConnect";

export default async function fetchLeaderboardData(req,res){
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        res.status(403).send({message:"Forbidden"})
    }
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