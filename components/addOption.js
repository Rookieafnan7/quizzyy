export default function AddOption(props){
    // const sectionIndex = props.quizData.sections.findIndex((section)=>section.sectionId == props.sectionId)
    // const questionIndex = props.quizData.sections[sectionIndex].questions.findIndex((question)=>question.id == props.questionId)

    return(<>
            <div className="flex justify-center"> 
                <div onClick={()=>{
                    props.setQuizData((prev)=>{
                        let max = 1;
                        if(prev.sections[props.sectionIndex].questions[props.questionIndex].options.length>=1){
                            max = props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options.reduce(function(prev, current) {
                            return (prev.opId > current.opId) ? prev : current
                            }).opId + 1;
                            // console.log(max,"max")
                        }
                        if(prev.sections[props.sectionIndex].questions[props.questionIndex].options.length==0){
                            prev.sections[props.sectionIndex].questions[props.questionIndex].correctOptionId = max;
                        }
                        prev.sections[props.sectionIndex].questions[props.questionIndex].options.push({opId:max,optionDesc:''})
                        return({...prev})
                    })
                }}
                    className="cursor-pointer rounded-2xl text-sm p-[0.25rem] font-bold text-white text-center bg-black mt-4 w-[15rem]">
                    Add Option
                    <img src="/AddQuestion.png" className="w-4 inline-block ml-2"/>
                </div>
           </div>
    </>)
}