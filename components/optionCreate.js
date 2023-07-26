import { TextField } from "@mui/material"

export default function OptionCreate(props){
    const opIndex = props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options.findIndex((option)=>option.opId == props.opId)
    return(<>
               <div className="mt-4 flex flex-row align-middle justify-center  items-center self-center">
               <input type="radio" 
                        // className="mt-[-1rem]" 
                      checked={props.quizData.sections[props.sectionIndex].questions[props.questionIndex].correctOptionId == props.opId}
                    onChange={()=>{
                        props.setQuizData((prev)=>{
                            prev.sections[props.sectionIndex].questions[props.questionIndex].correctOptionId = props.opId
                            return ({...prev})
                        })
                    }}
                    id={`${props.sectionId}${props.questionId}${props.opId}`}

                    />
                <TextField name="quizName"
                            className="ml-4"
                            size="small"
                            value={props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc}
                            onChange={(e)=>{
                                // console.log(quizData)
                                props.setQuizData((prev)=>{
                                    prev.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc = e.target.value;
                                    return {...prev}
                                })
                            }}
                            error={props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc.length > 100 && props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc.length == 0}
                            helperText={props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc.length > 100 ? "Name must be below 100 characters" : (props.quizData.sections[props.sectionIndex].questions[props.questionIndex].options[opIndex].optionDesc.length == 0 ? 'Cannot be empty' : '')}
                            variant = "outlined"
                            fullWidth
                            multiline
                            />
                <img src="trash_black.png" className="w-[1rem] h-[1.2rem]  ml-2 cursor-pointer"
                    onClick={()=>{
                        props.setQuizData((prev)=>{
                            prev.sections[props.sectionIndex].questions[props.questionIndex].options.splice(opIndex,1);
                            return {...prev}
                        })
                    }}
                />
               </div>
    </>)
}