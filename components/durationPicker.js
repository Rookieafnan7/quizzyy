import { useState } from "react"
export default function DurationPicker(props){
    
    return(
        <>
            <div className="info-header text-md font-semibold pl-2 mt-8 mb-4">
                            Quiz Duration  
                        </div>
            <input className="duration-picker rounded-lg md:py-2 text-center inline-block md:w-16 w-10 mr-2 text-lg" type="number" step={1} value={props.hours} onChange={(e)=>{
                props.setHours(e.target.value)
                // console.log(hours)
                let time = e.target.value*60*60+props.minutes*60;
                props.setQuizData((prev)=>{
                    return {...prev,duration:time}
                })
                
            }}
            min={0}
            max={100}
            />
            <span className="text-semibold md:text-md text-sm">Hours</span>
            <input className="duration-picker rounded-lg md:py-2 text-center inline-block md:w-16 w-10 mr-2 ml-2 text-lg" type="number" step={1} value={props.minutes} onChange={(e)=>{
                props.setMinutes(e.target.value)
                // console.log(props.minutes)
                let time = props.hours*60*60+e.target.value*60;
                props.setQuizData((prev)=>{
                    return {...prev,duration:time}
                })
            }}
            min={0}
            max={59}
            />
            <span className="text-semibold md:text-md text-sm">Minutes</span>
            <span className={`block md:inline-block mt-2 md:mt-0 text-red-500 text-md ${props.hours*60+props.minutes<=0?'visible':'invisible'} ml-16`}> Cannot Be Empty</span>
        </>
    )
}