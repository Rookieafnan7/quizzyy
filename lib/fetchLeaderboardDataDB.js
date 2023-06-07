import mongoConnect from "./mongoConnect";
import { Answer } from "../Schema/Quiz";
import findScore from "./findScore";
export default async function fetchLeaderboardDataDB(quizId){
    await mongoConnect();
    const results = await Answer.find({quizId:quizId})
    // console.log(results,"results");
    
    console.log(question,"question")
    return results
}