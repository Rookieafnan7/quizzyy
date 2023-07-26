import { useMemo } from "react"
import { TextField } from "@mui/material"
import AddQuestion from "./addQuestion"
import AddOption from "./addOption"
import OptionCreate from "./optionCreate"
export default function QuestionCreate(props){
    const sectionIndex = props.quizData.sections.findIndex((section)=>section.sectionId == props.sectionId)
    const questionIndex = props.quizData.sections[sectionIndex].questions.findIndex((question)=>question.id == props.questionId)
    function showMarksHelperText(){
        return (
            <>
            <p className="text-right text-[0.75rem] pr-2 pt-[4px] text-red-500">Cannot be Empty</p>
            </>
        )
    }
    return(<>
        
        <div className="mx-8 relative rounded-2xl bg-[#AAAA] py-4 md:px-8 px-4 mt-4">
        <img src="trash_black.png" className="w-4 cursor-pointer absolute top-4 right-4"
                onClick={()=>{
                    props.setQuizData((prev)=>{
                        prev.sections[sectionIndex].questions.splice(questionIndex,1)
                        return {...prev}
                    })
                }}
            />
            <div className="md:flex md:justify-between cursor-pointer mt-4">
                <div className="md:w-[60%]">
                <div className="info-header text-sm font-semibold pl-2 mb-2">
                            Question Description :
                            </div>
                <TextField name=""
                            className=""
                            // sx={{color:'success'}}
                            value={props.quizData.sections[sectionIndex].questions[questionIndex].description}
                            onChange={(e)=>{
                                // let sectionIndex = props.quizData.sections.findIndex((section)=>section.sectionId == props.sectionId)
                                
                                props.setQuizData((prev)=> {
                                    prev.sections[sectionIndex].questions[questionIndex].description = e.target.value
                                    return {...prev}})
                            }}
                            // error={quizData?.quizDescription?.length > 500}
                            // helperText={quizData?.quizDescription?.length > 500 ? "Name must be below 50 characters" : ''}
                            error={props.quizData?.sections[sectionIndex].questions[questionIndex].description.length > 500 && props.quizData?.sections[sectionIndex].questions[questionIndex].description.length == 0}
                            helperText={props.quizData?.sections[sectionIndex].questions[questionIndex].description.length > 500 ? "Name must be below 500 characters" : (props.quizData?.sections[sectionIndex].questions[questionIndex].description == 0 ? 'Cannot be empty' : '')}
                            variant = "outlined"
                            
                            multiline
                            fullWidth
                            required
                            />
                </div>
                <div className="inline-block mt-4 md:mt-0">
                        <div className="info-header text-sm font-semibold pl-2 mb-2">
                                    Marks :
                                    </div>
                        <input className="duration-picker  rounded-lg py-2 text-center  text-md" type="number" step={1} value={props.quizData.sections[sectionIndex].questions[questionIndex].marks} onChange={(e)=>{
                            console.log(e.target.value)
                            props.setQuizData((prev)=>{
                                prev.sections[sectionIndex].questions[questionIndex].marks = e.target.value
                                return ({...prev})
                        })
                    }}
                    min={0}
                    />
                    {props.quizData.sections[sectionIndex].questions[questionIndex].marks == ''? showMarksHelperText(): null}
                </div>
            </div>
            <div className="">
                    <div className="mt-2 text-sm text-center font-semibold">{props.quizData.sections[sectionIndex].questions[questionIndex].options.length>0?"Select Correct Option":""}</div>
                {props.quizData.sections[sectionIndex].questions[questionIndex].options.map((option)=>{
                    return(
                        <OptionCreate key={option.opId} quizData={props.quizData} setQuizData={props.setQuizData} sectionId={props.sectionId} questionId={props.questionId} sectionIndex={sectionIndex} questionIndex={questionIndex} opId={option.opId}/>
                    )
                })}
                <div className="">
                    <AddOption quizData={props.quizData} setQuizData={props.setQuizData} sectionId={props.sectionId} questionId={props.questionId} sectionIndex={sectionIndex} questionIndex={questionIndex}/>
                </div>
            </div>
        </div>
    </>)
}