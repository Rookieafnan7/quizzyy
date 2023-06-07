import QuestionIcons from "./questionicons"
export default function Section(props){
    return(
        <>
            <div className="section p-4 pb-6 rounded-2xl bg-section mt-4">
              <h2 className="mb-4 font-semibold">{props.sectionData? props.sectionData.sectionTitle:"Section"}</h2>
              <div className="flex justify-evenly items-center">
                {props.sectionData?props.sectionData.questions.map((question,index)=>{
                  return <QuestionIcons sectionIndex={props.sectionIndex} questionData={question} questionIndex={index+1} answer={props.answer} key={index} sidebarNavigation={props.sidebarNavigation}/>
                }):null}
              </div>
            </div>
        </>
    )
}