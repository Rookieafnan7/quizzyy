import { Quiz } from "../Schema/Quiz";

export default async function  createQuizId(){
    const document = await Quiz.findOne({}).sort({quizId:-1}).limit(1);
    
    if(document){
        return document.quizId + 1;
    }else{
        return 1
    }
}