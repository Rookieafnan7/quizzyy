import fetchQuizMongo from "../../../lib/fetchQuizMongo";
import removeAttribute from "../../../lib/removeAttribute";
export default async function quizFetch(req,res){
    try{
        if(req.body){
            const id = await req.body.quizId
            // console.log(id);
            const results = await fetchQuizMongo(id);
            // console.log(results)
            // console.log(results.quizName)
           if(results){
                
                let quizDetails = {
                    quizCreationDate:results.quizCreationDate,
                    quizDescription:results.quizDescription,
                    createdBy:results.createdBy,
                    quizId:results.quizId,
                    quizName:results.quizName,
                    attemptOnce:results.attemptOnce,
                    userId:results.userId,
                    totalSections:results.totalSections,
                    totalQuestions:results.totalQuestions,
                    totalMarks:results.totalMarks
                }
                console.log(quizDetails,"quizDetails")
                //console.log(modifiedResults.startTime,modifiedResults.stopTime);
                res.status(200).send({status:true,quizDetails:quizDetails});
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