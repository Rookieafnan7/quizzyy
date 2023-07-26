export default function AddSection(props){
    return(
        <>
            <div className="flex justify-center">
            <div className="w-[60%] bg-[gray] mb-4 mt-4 px-4 py-4 rounded-2xl text-center text-lg font-semibold cursor-pointer text-white" onClick={()=>{
                let max = 1
                if(props.quizData.sections.length>=1){
                    max = props.quizData.sections.reduce(function(prev, current) {
                    return (prev.sectionId > current.sectionId) ? prev : current
                    }).sectionId + 1;
                    console.log(max,"max")
                } 
                props.setQuizData((prev)=>{
                    return {...prev,sections:[...prev.sections,{sectionId:max,sectionTitle:'',questions:[]}]}
                })
            }}>
                        Add Section
                        <img src="/AddQuestion.png" className="text-white inline-block w-8 ml-4"/>
                    </div>
            </div>
        </>
    )
}