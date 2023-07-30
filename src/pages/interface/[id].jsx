import { useState } from "react"
import {useSession} from "next-auth/react"
import { useEffect } from "react";
import Sidebar from "../../../components/sidebar";
import QuestionDisplay from "../../../components/questionDisplay";
import TopBar from "../../../components/topBar";
import { useRouter } from "next/router";

export default function Interface(){

    const {data:session,status} = useSession({required:true})
    // const userId = session.userData.userId
    const router = useRouter();
    const id = router.query.id
    const [answer,setAnswer] = useState([])
    const [sidebarStatus,setSidebarStatus] = useState(true);
    //const [sidebarQuestionStatus,setSidebarQuestionStatus] = useState({});
    const [attemptData,setAttemptData] = useState({})
    const [currentQuestionData,setCurrentQuestionData] = useState({section:undefined,question:undefined,options:[]});
    const [quizDataStore,setQuizDataStore] = useState({sections:undefined});
    var quizData;
    function loadQuestion(section,question){

        if(quizDataStore.sections){
          return({section:section,question:question,sectionId:quizDataStore.sections[section-1].sectionId,questionId:quizDataStore.sections[section-1].questions[question-1].id,...quizDataStore.sections[section-1].questions[question-1]});
        }
      }
    async function submitAnswer(){
      const url = "/api/submitQuiz"
      const object = {
        ...attemptData,
        answer:answer,
        submitTime:new Date(),
      }
      try{
        const response = await fetch(url,{
          method:'POST',
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(object),
          })
          const result = await response.json()
          console.log(result)
      }catch(err){
        console.log(err);
      }
    }
    function settleStatus(currentSection,currentQuestion){
      let object = 
        answer.find((question)=>{
          if(question.qid == currentQuestion && question.sid == currentSection){
            return true
          }else{
            return false
          }
        });
      let index = answer.indexOf(object);
      if(object.checkedOption){
        if(object.status == 'unvisited'){
          object.status='answered'
        }
      }else{
        object.status = 'notanswered';
      }
      let temp = answer;
      temp.splice(index,1);
      temp.push(object);
      setAnswer([...temp])
    }
    function nextQuestion(){
      let currentSection = currentQuestionData.section;
      let currentQuestion = currentQuestionData.question;
      settleStatus(currentSection,currentQuestion);
      
      setCurrentQuestionData((currentQuestionData)=>{
        if(currentQuestionData.section && quizDataStore.sections){
          if(currentQuestion+1<=quizDataStore.sections[currentSection-1].questions.length){
          // setCurrentQuestionData({section:currentSection,question:currentQuestion+1,...quizData.sections[currentSection].questions[currentQuestion]})
            return loadQuestion(currentSection,currentQuestion+1)
          }else if(currentSection+1<=quizDataStore.sections.length){
          // setCurrentQuestionData({section:currentSection+1,question:1,...quizData.sections[currentSection].questions[0]})
            return loadQuestion(currentSection+1,1);
          }else{
            return currentQuestionData;
          }
        }else{
          return currentQuestionData;
        }

      })
    }
    function prevQuestion(){
      let currentSection = currentQuestionData.section;
      let currentQuestion = currentQuestionData.question;
      settleStatus(currentSection,currentQuestion);
      setCurrentQuestionData((currentQuestionData)=>{
        
        if(currentQuestion-1>=1){
        // setCurrentQuestionData({section:currentSection,question:currentQuestion+1,...quizData.sections[currentSection].questions[currentQuestion]})
          return loadQuestion(currentSection,currentQuestion-1)
        }else if(currentSection-1>=1){
        // setCurrentQuestionData({section:currentSection+1,question:1,...quizData.sections[currentSection].questions[0]})
          return loadQuestion(currentSection-1,quizDataStore.sections[currentSection-2].questions.length);
        }else{
          return currentQuestionData;
        }
          

      })
    }
    function sidebarNavigation(sectionIndex,questionIndex){
      let currentSection = currentQuestionData.section;
      let currentQuestion = currentQuestionData.question;
      settleStatus(currentSection,currentQuestion);
      let object = {section:sectionIndex,question:questionIndex,sectionId:quizDataStore.sections[sectionIndex-1].sectionId,questionId:quizDataStore.sections[sectionIndex-1].questions[questionIndex-1].id,...quizDataStore.sections[sectionIndex-1].questions[questionIndex-1]}
      setCurrentQuestionData(object);
    }
    useEffect(()=>{
      console.log("run")
      async function fetchQuiz(){
        console.log(session,"session")
        try{
          // console.log(session?.userData)
          if(router && router.query && router.query.id){
            const url = "/api/quizFetch";
            const response = await fetch(url,{
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
              body: JSON.stringify({quizId:id,userId:session.userData.userId}),
            })
             let tempData = await response.json()
             quizData = tempData.results
            
            //  console.log(quizData,"quizData");
            
            setCurrentQuestionData({section:1,question:1,sectionId:quizData.sections[0].sectionId,questionId:quizData.sections[0].questions[0].id,...quizData.sections[0].questions[0]});
            // console.log(quizData)
            setAttemptData(tempData.answer)
            setQuizDataStore(quizData);
            // let answerArray = []
            // if(quizData.sections){
            //   for(let i = 0;i<quizData.sections.length;i++){
            //     for(let j = 0;j<quizData.sections[i].questions.length;j++){
            //       let object = {
            //                       qindex:j+1,
            //                       sindex:i+1,
            //                       qid:quizData.sections[i].questions[j].id,
            //                       sid:quizData.sections[i].sectionId,
            //                       unchecked:true,
            //                       status:'unvisited'
            //                     };
            //       answerArray.push(object);
            //     }
            //   }}
              setAnswer(tempData.answer.answer);
              console.log(tempData,"tempData")
            

          }

        }catch(err){
          console.log(err);
        }
      }
      // if(session?.userData){
        
        // console.log("check")
        if(currentQuestionData.section==undefined)
        fetchQuiz()
      // }else{
      //   console.log("uncheck,",session)
      // }
        
        // console.log(answer);

    },[router,session])

    return(
    <>
    <div className="lg:mx-16 md:mx-10 mx-4">
      <h2 className="md:mt-6 mt-2 bg-title text-2xl text-white font-semibold font-poppins px-8 py-2 rounded-2xl shadow-lg text-center md:text-start">
        Test Quiz
      </h2>
      <div className="md:mx-2 mt-4">
        <TopBar quizDataStore={quizDataStore} currentQuestionData={currentQuestionData} submitAnswer={submitAnswer}/>
        <div className={`flex md:gap-4 justify-between mt-4 relative`}>
          <QuestionDisplay sidebarStatus={sidebarStatus} currentQuestionData={currentQuestionData} answer={answer} setAnswer={setAnswer} nextQuestion={nextQuestion} prevQuestion={prevQuestion} attemptData={attemptData}/>
          <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} quizDataStore={quizDataStore} currentQuestionData={currentQuestionData} answer={answer} sidebarNavigation={sidebarNavigation}/>
        </div>
    </div>
    </div>
    
    </>)
}