import { useState } from "react"
export default function DurationPicker(props){
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0)
    return(
        <>
            <input className="duration-picker rounded-lg py-2 text-center" type="number" step={1} value={hours} onChange={(e)=>{
                setHours(e.target.value)
                console.log(hours)
            }}
            min={0}
            max={100}
            />

        </>
    )
}