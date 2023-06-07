export default function QuestionDisplay(props){
    function handleRadioClick(sid,qid,opId){
      let answerData = props.answer;
      let targetObject = answerData.find((question)=>{
        if(question.qid == qid && question.sid == sid){
          return true
        }else{
          return false
        }
      })
      // console.log(targetObject)
      let index = answerData.indexOf(targetObject);
      answerData.splice(index,1);
      // console.log(answerData)
      targetObject.checkedOption = opId;
      targetObject.status = 'answered';
      answerData.push(targetObject);
      
      props.setAnswer([...answerData]);
      // console.log()
    }

    
    return(<>
        <div className={`question-container w-[97%] ${props.sidebarStatus?"m:w-[68%]":"w-[97%] m:w-[94%]"}`}>
            <div className="question bg-question rounded-2xl drop-shadow-lg py-4 px-6 md:h-[27vh] md:overflow-y-scroll">
           {props.currentQuestionData.description}
            </div>
            <div className={`mt-[3vh] md:h-[35vh] bg-options rounded-2xl drop-shadow-lg py-4 px-6 overflow-y-scroll`}>
              <form className="">
                {props.currentQuestionData.options  && props.answer ? props.currentQuestionData.options.map((option)=>{
                  return(
                    <div key={option.opId} className="mt-4">
                      <input type="radio" name={props.currentQuestionData.questionId} 
                      checked={props.answer.find((question)=>{
                      if(question.qid == props.currentQuestionData.questionId && question.sid == props.currentQuestionData.sectionId){
                        return true
                      }else{
                        return false
                      }
                    }).checkedOption==option.opId}
                    onChange={()=>{handleRadioClick(props.currentQuestionData.sectionId,props.currentQuestionData.questionId,option.opId)}}
                    id={`${props.currentQuestionData.questionId}${props.currentQuestionData.sectionId}${option.opId}`}

                    />
                    <label htmlFor={`${props.currentQuestionData.questionId}${props.currentQuestionData.sectionId}${option.opId}`} className="pl-8">{option.optionDesc}</label>
                    </div>
                  )
                }):null}
              </form>
              
              {/* checked={props.answer.find((question)=>{
                      if(question.qid == props.currentQuestionData.questionId && question.sid == props.currentQuestionData.sectionId){
                        return true
                      }else{
                        return false
                      }
                    }).checkedOption==option.opid} */}
            </div>
            <div className="mt-[2vh]">
              <div className="float-left text-left w-[8rem] rounded-lg py-2 text-md font-semibold px-2 drop-shadow-xl  hover:bg-qnnavbtn border-4 border-qnnavbtn hover:border-white hover:text-white duration-500 ease-out" onClick={()=>{props.prevQuestion()}}>
              <img src="/prev.png" className="inline-block w-4 mr-4"/>
              Previous</div>
              <div className="float-right text-right w-[8rem] rounded-lg py-2 text-md font-semibold px-2 drop-shadow-xl  hover:bg-qnnavbtn border-4 border-qnnavbtn hover:border-white hover:text-white duration-500 ease-out" onClick={()=>{props.nextQuestion()}}>
              Next
              <img src="/next.png" className="inline-block w-4 ml-8"/></div>
            </div>
          </div>
    </>)
}