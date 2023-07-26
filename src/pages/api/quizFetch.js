import fetchQuizMongo from "../../../lib/fetchQuizMongo";
import removeAttribute from "../../../lib/removeAttribute";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import mongoConnect from "../../../lib/mongoConnect";
import { Answer } from "../../../Schema/Quiz";
import findAttempt from "../../../lib/findAttempt";

export default async function quizFetch(req,res){
    const session = await getServerSession(req, res, authOptions)
    let answerObject = {}
    if (!session) {
        res.status(403).send({message:"Forbidden"})
    }
    try{
        await mongoConnect();
        if(req.body){
            const id = await req.body.quizId
            // console.log(req.body,"body")
            const results = await fetchQuizMongo(id);
            // console.log(results)
           if(results){
                
                if(results.quizAvailabilty == "always"){
                    results.quizAttemptEndTime = results.quizClosingTime
                }else{
                    // console.log(results.duration)
                    results.quizAttemptEndTime = new Date(Date.now()+results.duration*1000)
                }
                // let answer = {
                //     userName:req.body.userName,
                //     userId:req.body.userId,
                //     quizId:req.body.quizId,
                //     closed:false,
                //     attemptClosingTime:results.quizAttemptEndTime
                // }
                const attemptedOpenAnswer = await Answer.findOne({userId:req.body.userId,quizId:req.body.quizId,attemptClosingTime:{$gt:new Date()}})
               // console.log(attemptedOpenAnswer,"attemptedOpenAnswer")
                if(attemptedOpenAnswer){
                     answerObject = attemptedOpenAnswer
                }else{
                     answerObject = {
                        userId:parseInt(req.body.userId),
                        quizId:req.body.quizId,
                        closed:false,
                        userName:req.body.userName,
                        attemptClosingTime:results.quizAttemptEndTime,
                        answer:[]
                    }
                    const highestAttemptAnswer = await Answer.findOne({userId:req.body.userId,quizId:req.body.quizId}).sort({attemptNo:-1}).limit(1)
                    // console.log(highestAttemptAnswer,"worked")
                    if(highestAttemptAnswer!=null){
                        console.log(1)
                        answerObject.attemptNo = highestAttemptAnswer.attemptNo + 1;
                    }else{
                        answerObject.attemptNo = 1;
                    }
                    console.log(results,"results")
                    for(let i = 0;i<results.sections.length;i++){
                        for(let j = 0;j<results.sections[i].questions.length;j++){
                          let object = {
                                          qindex:j+1,
                                          sindex:i+1,
                                          qid:results.sections[i].questions[j].id,
                                          sid:results.sections[i].sectionId,
                                          status:'unvisited'
                                        };
                          answerObject.answer.push(object);
                        }
                      }
                      console.log(answerObject)
                      await Answer.insertMany([answerObject])
                }
                
                let modifiedResults = await removeAttribute(results);

                res.status(200).send({status:true,results:modifiedResults,answer:answerObject});
           }else{
            res.send({status:false});
           }
        }else{
            throw err;
        }
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
}