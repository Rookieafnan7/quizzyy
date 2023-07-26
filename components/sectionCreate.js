import { useState } from "react"
import { TextField } from "@mui/material"
import AddQuestion from "./addQuestion"
import QuestionCreate from "./questionCreate"
export default function SectionCreate(props){
    const sectionIndex = props.quizData.sections.findIndex((section)=>{
        return section.sectionId === props.sectionId
    })
    return(
        <>
        {/* {console.log(props.quizData.sections.find(item => item.sectionId === props.sectionId))} */}
            <div className="bg-createsection mt-4 md:px-4 md:py-4 py-4 rounded-2xl">
                
                <div className="flex items-center justify-between">
                    <div>
                    <div className="info-header text-md font-semibold pl-2  md:mt-0 mb-2 mx-8">
                            Section Name :    
                    </div>
                
                

                <TextField  className="mx-8"
                            value={props.quizData.sections.find(item => item.sectionId == props.sectionId).sectionTitle}
                            onChange={(e)=>{
                                let newValue = e.target.value
                                props.setQuizData((prev)=> {
                                    let sectionIndex = prev.sections.findIndex((section)=>{
                                        return section.sectionId === props.sectionId
                                    })
                                    let sectionData = prev.sections[sectionIndex]
                                    prev.sections.splice(sectionIndex,1);
                                    let sectionArray = [...prev.sections,{...sectionData,sectionTitle:newValue}]
                                    return {...prev,sections:[...sectionArray]}
                                })
                            }}
                            error={props.quizData?.sections[sectionIndex].sectionTitle.length > 50 && props.quizData?.sections[sectionIndex].sectionTitle.length == 0}
                            helperText={props.quizData?.sections[sectionIndex].sectionTitle.length > 50 ? "Name must be below 50 characters" : (props.quizData?.sections[sectionIndex].sectionTitle.length  == 0 ? 'Cannot be empty' : '')}
                            variant = "outlined"
                            size="small"
                            /> 
                    </div> 
                    <img src="trash.png" className="w-8 h-8 cursor-pointer mr-2"
                        onClick={()=>{
                            props.setQuizData((prev)=>{
                                prev.sections.splice(sectionIndex,1);
                                return {...prev}
                            })
                        }}
                    />
                    </div>
                            {props.quizData.sections[sectionIndex].questions.map((question,index)=><QuestionCreate key={index} quizData={props.quizData} setQuizData={props.setQuizData} sectionId={props.sectionId} questionId={question.id}/>)}
                            <AddQuestion quizData={props.quizData} setQuizData={props.setQuizData} sectionId={props.sectionId}/>  
                </div>
        </>
    )
}