export default function AddQuestion(props){
    return(
        <>
            {/* <div className="flex justify-center"> */}
            {/* bg-[gray] mt-4 px-4 py-4 rounded-2xl text-center text-lg font-semibold cursor-pointer */}
            {/* className="cursor-pointer rounded-2xl text-sm p-[0.25rem] font-bold text-white text-center bg-black mt-4 w-[15rem]" */}
            <div className="bg-[white] mx-8 mt-4 px-2 py-2 rounded-2xl mb-4 text-center text-md font-semibold cursor-pointer border-2 border-black" onClick={()=>{
                props.setQuizData((prev)=>{
                
                    let sectionIndex = prev.sections.findIndex((section)=>{
                                        return section.sectionId === props.sectionId
                                    })
                    let sectionArray = prev.sections
                    let sectionObject = prev.sections[sectionIndex]
                    let questionsArray = prev.sections[sectionIndex].questions;
                    // sectionArray.splice(sectionIndex,1);
                    
                    
                    let max = 1
                    if(props.quizData.sections[sectionIndex].questions.length>=1){
                        max = props.quizData.sections[sectionIndex].questions.reduce(function(prev, current) {
                        return (prev.id > current.id) ? prev : current
                        }).id + 1;
                        // console.log(max,"max")
                    } 
                    questionsArray.push({id:max,description:'',marks:'',options:[]})
                    sectionObject.questions = questionsArray
                    sectionArray[sectionIndex] = sectionObject

                    console.log(sectionArray)
                    return {...prev,sections:[...sectionArray]}

                })
            }}>
                <span className="inline-block">Add Question</span><img src="/AddSectionImage.png" className="inline-block w-[1.5rem] ml-4"/>                
            </div>
            {/* </div> */}
        </>
    )
} 