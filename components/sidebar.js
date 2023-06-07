import Section from "./section";
export default function Sidebar(props){
    return(<>
        <div className={`${(props.sidebarStatus?"open":"close")} fixed top-[20vh] right-0 sidebar md:static h-[80vh] md:h-[65vh] rounded-2xl bg-sidebar pb-4 pl-6 pr-2 drop-shadow-lg overflow-y-scroll`}>
            <img className="absolute top-[40vh] md:top-[32.5vh] translate-y-[-50%] left-[0] cursor-pointer w-[1rem]" onClick={()=>{
              props.setSidebarStatus((prev)=>{
                console.log(prev);
                return !prev;
                })}} src="/triangle.png"/>
              {props.quizDataStore.sections?props.quizDataStore.sections.map((section,index)=>{
                return <Section sectionData={section} sectionIndex={index+1} currentQuestionData={props.currentQuestionData} answer={props.answer} key={index} sidebarNavigation={props.sidebarNavigation}/>
              }):null}
          </div>
    </>)
}