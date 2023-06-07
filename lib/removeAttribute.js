export default async function removeAttribute(quiz){
    let quizmod = quiz
    // console.log("func called",quizmod,quizmod.sections)
    if(quizmod.sections){
        // console.log("sections")
        for(let i=0;i<quizmod.sections.length;i++){
            if(quizmod.sections[i].questions){
                // console.log(quizmod.sections[i].questions.length,"length");
                for(let j=0;j<quizmod.sections[i].questions.length;j++){
                    // console.log(quizmod.sections[i].questions[j].correctOptionId);
                    quizmod.sections[i].questions[j].correctOptionId = undefined;
                    //console.log(quizmod.sections[i].questions[j].correctOptionId,"correct");
                    // console.log()
                }
            }
        }
    }
    return quizmod;
}