import Navbar from "../../components/navbar"
import { useSession } from "next-auth/react"
import { TextField } from "@mui/material"
import { useState } from "react"
import SetQuizAvailabiltyTime from "../../components/setQuizAvailabilityTime"
// import FormControl from "@mui/material"
// import FormLabel from "@mui/material"
// import RadioGroup from "@mui/material"
// import Radio from "@mui/material"
// import FormControlLabel from "@mui/material"
import {FormControl, FormLabel,RadioGroup,Radio,FormControlLabel} from "@mui/material"
import DurationPicker from "../../components/durationPicker"
import SectionCreate from "../../components/sectionCreate"
import AddSection from "../../components/addSection"
import SubmitQuizButton from "../../components/submitQuizButton"
export default function createQuiz(){

    const {data:session,status} = useSession({required:true})
    const [quizData,setQuizData] = useState({
        quizName:'',
        quizDescription:'',
        quizAvailability:'limited',
        startDateTime:null,
        endDateTime:null,
        sections:[]

    })
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    return(
        <>
            <Navbar/>
            <div className="lg:mx-16 md:mx-10 mx-4">
                <div className="margin-0 create-quiz-container">
                    <span className="inline-block bg-createquiz px-4 py-2 text-lg font-bold text-white mt-4 rounded-2xl tracking-wider">
                        Create Your Quiz
                    </span>
                </div>
                <div className="bg-createquizprimary rounded-xl px-2 mt-4 md:px-4 py-4 ">
                <div className="md:flex md:justify-between">
                <div className="md:w-[30%] md:mx-8 mx-4">
                        <div className="info-header text-md font-semibold pl-2 mb-2">
                            Quiz Name :
                            </div>
                            <TextField name="quizName"
                            
                            value={quizData.quizName}
                            onChange={(e)=>{
                                // console.log(quizData)
                                setQuizData((prev)=> {return {...prev,quizName:e.target.value}})
                            }}
                            error={quizData?.quizName?.length > 50 && quizData?.quizName?.length == 0}
                            helperText={quizData?.quizName?.length > 50 ? "Name must be below 50 characters" : (quizData?.quizName?.length == 0 ? 'Cannot be empty' : '')}
                            variant = "outlined"
                            size="small"
                            
                            />
                    </div>
                    <div className="md:w-[30%] md:mx-8 mx-4">
                        <div className="info-header text-md font-semibold pl-2 mt-8 md:mt-0 mb-2">
                            Quiz Description :    
                        </div>
                        <TextField name="quizDescription"
                            className="quiz-description"
                            // sx={{color:'success'}}
                            value={quizData.quizDescription}
                            onChange={(e)=>{
                                // console.log(quizData)
                                setQuizData((prev)=> {return {...prev,quizDescription:e.target.value}})
                            }}
                            // error={quizData?.quizDescription?.length > 500}
                            // helperText={quizData?.quizDescription?.length > 500 ? "Name must be below 50 characters" : ''}
                            error={quizData?.quizDescription?.length > 500 && quizData?.quizDescription?.length == 0}
                            helperText={quizData?.quizDescription?.length > 500 ? "Name must be below 500 characters" : (quizData?.quizDescription?.length == 0 ? 'Cannot be empty' : '')}
                            variant = "outlined"
                            
                            multiline
                            fullWidth
                            required
                            />
                    </div>
                </div>
                    
                <div className="md:mx-8 mx-4 mt-4">
                <FormControl>
                        
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={quizData.quizAvailability}
                            onChange={(e)=>{
                                // console.log(e.target.value)
                                setQuizData((prev)=>{return {...prev,quizAvailability:e.target.value}})
                            }}
                        >
                            <FormControlLabel className="mr-8" value="limited" control={<Radio />} label="Set Quiz Availabilty Time" />
                            <FormControlLabel value="always" control={<Radio />} label="Always Available" />
                        </RadioGroup>
                    </FormControl>
                    {/* <SetQuizAvailabiltyTime quizData={quizData} setQuizData={setQuizData}/>
                    <DurationPicker  quizData={quizData} setQuizData={setQuizData}/> */}
                    {quizData.quizAvailability=="limited"?<SetQuizAvailabiltyTime quizData={quizData} setQuizData={setQuizData}/>:<DurationPicker  quizData={quizData} setQuizData={setQuizData} minutes={minutes} hours={hours} setHours={setHours} setMinutes={setMinutes}/>}
                </div>
                </div>
                
                {quizData.sections.map((obj,index)=>{
                    return <SectionCreate quizData={quizData} setQuizData={setQuizData} sectionId={obj.sectionId} key={index}/>
                })}
                <AddSection quizData={quizData} setQuizData={setQuizData}/>
                <SubmitQuizButton quizData={quizData}/>
            </div>
            
        </>
    )


}
