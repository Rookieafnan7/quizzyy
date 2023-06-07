import findAttempt from "../../../lib/findAttempt";
import findScore from "../../../lib/findScore";
import mongoConnect from "../../../lib/mongoConnect"
import { Answer } from "../../../Schema/Quiz";
export default async function submitQuiz(req,res){
    try{
        if(req.body){
            console.log("body");
            let answer = req.body
            // console.log(answer)
            await mongoConnect();
            const result = await Answer.find({quizId:answer.quizId,userId:answer.userId});
            // console.log(result)
            const attempt = await findAttempt(result);
            // console.log(attempt)
            answer.attemptNo = attempt;
            const marks = await findScore(answer)
            answer.marks = marks
            console.log(answer.marks)
            await Answer.insertMany([answer]);
            // console.log("done")
            res.send({saveStatus:true})
            
        }else{
            throw err;
        }
    }catch(err){
        console.log(err)
        res.send({saveStatus:false})
    }
}