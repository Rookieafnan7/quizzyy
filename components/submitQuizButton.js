import { Alert } from "@mui/material";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function SubmitQuizButton(props){
    const {data:session,status} = useSession({required:true})
    const router = useRouter();
    const id = router.query.id
    const [alertStatus,setAlertStatus] = useState(false);
    const [submitStatus,setSubmitStatus] = useState(false)
    const [quizId,setQuizId] = useState('')
    function checkValues(){
        if(props.quizData.quizAvailability == "always" && props.quizData.duration<=0){
            // console.log(props.quizData.duration)
            // console.log(1)
            setAlertStatus(true)
            return false
        }
        if(props.quizData.quizAvailability == "limited" && (!props.quizData.startDateTime || !props.quizData.endDateTime)){
            console.log(2)
            setAlertStatus(true)
            return false
        }
        if(props.quizData.quizName.length >50 || props.quizData.quizName.length ==0){
            console.log(3)
            setAlertStatus(true)
            return false
        }
        if(props.quizData.quizDescription.length >500 || props.quizData.quizDescription.length ==0){
            console.log(4)
            setAlertStatus(true)
            return false
        }
        props.quizData.sections.every(section => {
            if(section.sectionTitle.length>50 || section.sectionTitle.length==0){
                console.log(5)
                setAlertStatus(true)
                return false
            }
            if(section.questions.every(question => {
                if(question.description.length>500 || question.description.length==0){
                    console.log(6)
                    setAlertStatus(true)
                    return false
                }
                if(question.options.every(option => {
                    if(option.optionDesc.length >100 || option.optionDesc.length ==0){
                        console.log(7)
                        setAlertStatus(true)
                        return false
                    }
                    return true
                }))
                return true
            }))
            return true
        })
        setAlertStatus(false)
        return true
    }
    return(<>
    
    <div className="flex flex-col justify-center items-center mb-4 mt-2 border-t-[3px] border-gray-200">
    {alertStatus?<Alert severity="error" className="mt-2 border-2 border-red-500" onClose={()=>{
        setAlertStatus(false)
    }}> Please check your inputs and make sure they match the specified criteria</Alert> : null}
        <div className={`${submitStatus?"hidden":null} select-none mt-4 p-4 text-center text-xl bg-[#0D1282] font-bold text-white rounded-2xl shadow-xl border-2 border-gray-400 cursor-pointer`}
        onClick={async ()=>{
            // if(setLoadingStatus)
            //     return
            // setLoadingStatus(true)
            if(checkValues()){
                const object = {
                    userId:session.userData.userId,
                    quizCreationDate:new Date(),
                    userName:session.userData.userName,
                    ...props.quizData
                }
                try{
                    const response = await fetch("/api/createQuiz",{
                        method:'POST',
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body:JSON.stringify(object),
                    })
                    const result = await response.json()
                    if(result.saveStatus){
                        // router.push(`/quiz/${result.quizId}`)
                        setSubmitStatus(true)
                        setQuizId(result.quizId)
                    }
                    
                    // console.log(result)
                }catch(err){
                    console.log(err);
                }
            }
            // setLoadingStatus(false)
        }}
        > 
            Submit Quiz
        </div>
        <div className={`flex justify-center self-center mt-8 ${submitStatus?"visible":"invisible"}`}>
        <div className="rounded-2xl bg-gray-200 text-md px-8 py-4">
                <div className="text-xs">The link for your quiz is </div>
                http://localhost:3000/quiz/{quizId}
            </div>
        </div>
        </div>
    </>)
}