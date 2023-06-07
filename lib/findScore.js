import fetchQuizMongo from "./fetchQuizMongo";

export default async function findScore(answer){
    // console.log(answer,"answer")
    const quizId = answer.quizId;
    const question = await fetchQuizMongo(quizId);
    // console.log(question,"question")
    let sum = 0;
    console.log(answer.answer.length);
    for(let i = 0;i<answer.answer.length;i++){
        console.log(answer.answer[i]?.checkedOption, question.sections[answer.answer[i].sindex-1].questions[answer.answer[i].qindex-1].correctOptionId,"check")
        if(answer.answer[i]?.checkedOption == question.sections[answer.answer[i].sindex-1].questions[answer.answer[i].qindex-1].correctOptionId && question.sections[answer.answer[i].sindex-1].questions[answer.answer[i].qindex-1].correctOptionId){
            sum+=question.sections[answer.answer[i].sindex-1].questions[answer.answer[i].qindex-1].marks 
            console.log(answer.answer[i]?.checkedOption, question.sections[answer.answer[i].sindex-1].questions[answer.answer[i].qindex-1].correctOptionId)
        }
    }
    // console.log(sum,"sum");
    return sum;
}