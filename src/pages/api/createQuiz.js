import mongoConnect from "../../../lib/mongoConnect"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import createQuizId from "../../../lib/createQuizId"
import { Quiz } from "../../../Schema/Quiz"
export default async function createQuiz(req,res){
    const session = await getServerSession(req, res)
    if (!session) {
        res.status(403).send({message:"Forbidden",saveStatus:false})
    }
    try{
        if(req.body){
            let quiz = req.body
            await mongoConnect();
            quiz.quizId = await createQuizId()
            let sections = quiz.sections.length
            let marks = 0;
            let questions = 0;
            quiz.sections.forEach(section => {
                questions+=section.questions.length
                section.questions.forEach(question =>{
                    marks+=parseInt(question.marks)
                    console.log(marks,question)
                })
            });
            quiz.totalMarks = marks;
            quiz.totalSections = sections;
            quiz.totalQuestions = questions;
            if(quiz.quizAvailability == "always"){
                quiz.quizClosingTime = endDateTime 
            }else{
                quiz.quizClosingTime = new Date(Date.now() + 2*30*24*60*60*1000)
            }
            // console.log(quiz)
            await Quiz.insertMany([quiz])
            res.status(200).send({saveStatus:true,quizId:quiz.quizId,})
        }else{
            throw new Error("No body");
        }
    }catch(err){
        console.log(err)
        res.send({saveStatus:false,err:err})
    }
}


