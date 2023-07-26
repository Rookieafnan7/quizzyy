import { DateTimePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
export default function SetQuizAvailabiltyTime(props){
    return(
        <>
            <div className={`md:flex md:justify-between mt-4 py-2 mx-[-1rem]  ${props.quizData.startDateTime==null||props.quizData.endDateTime==null?"border-red-500 border-2 rounded-2xl":''}`}>
            
                <div>
                <div className="info-header text-md font-semibold pl-2 mt-8 md:mt-0 mb-2 ml-4 md:ml-[1rem]">
                            Start Date Time :    
                        </div>
                <DateTimePicker 
                    className="date-time-picker ml-4 md:ml-[1rem]"
                    value={dayjs(props.quizData.startDateTime)} onChange={(newValue)=>{
                    console.log(newValue.toDate(),"newValue")
                    props.setQuizData((prev)=>{return {...prev,startDateTime:newValue.toDate()}})}}
                        disablePast
                        required
                        maxDateTime={props.quizData.endDateTime!==null?dayjs(props.quizData.endDateTime):dayjs().add(2,'months')}
                        // onError={true}
                        error={props.quizData.startDateTime==null}
                        helperText={props.quizData.startDateTime==null?'Cannot Be Empty':''}
                    />
                </div>
                <div>
                <div className="info-header text-md font-semibold pl-2 mt-8 ml-4 md:mt-0 mb-2 ">
                            End Date Time :    
                        </div>
                <DateTimePicker
                    className="md:mr-[1rem] ml-4" 
                    value={dayjs(props.quizData.endDateTime)} onChange={(newValue)=>{
                    console.log(newValue.toDate(),"newValue")
                    props.setQuizData((prev)=>{return {...prev,endDateTime:newValue.toDate()}})}}
                        disablePast
                        minDateTime={props.quizData.startDateTime!==null?dayjs(props.quizData.startDateTime):undefined}
                        required
                        maxDateTime={dayjs().add(2,'months')}
                    />
                </div>
            </div>
            {props.quizData.startDateTime==null||props.quizData.endDateTime==null?function(){
                    return(
                        <>
                            <div className="text-center text-red-500">
                                Enter Start and End Date Times
                            </div>
                        </>
                    )
                }():null}
        </>
    )
        
    
}