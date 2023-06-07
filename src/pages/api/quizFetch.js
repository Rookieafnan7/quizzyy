import fetchQuizMongo from "../../../lib/fetchQuizMongo";
import removeAttribute from "../../../lib/removeAttribute";
export default async function quizFetch(req,res){
    try{
        if(req.body){
            const id = await req.body.quizId
            // console.log(id);
            const results = await fetchQuizMongo(id);
            
           if(results){
                // console.log(results,"results api")
                let modifiedResults = await removeAttribute(results);
                modifiedResults.startTime = new Date()
                if(modifiedResults.duration){
                    modifiedResults.stopTime = new Date()
                    modifiedResults.stopTime.setTime(modifiedResults.startTime.getTime()+modifiedResults.duration*60*60*1000)
                }
                // console.log(modifiedResults,"modifiedresults")
                //console.log(modifiedResults.startTime,modifiedResults.stopTime);
                res.status(200).send({status:true,results:modifiedResults});
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