export default function QuestionIcons(props){
    // function colorResolver(status){
    //     switch(status){
    //         case 'unvisited':
    //             return 'white';
    //             break;
    //         case 'markedforreview':
    //             return 'marked'
    //     }
    // }
    return(<>
        <div className={`text-center h-[6rem] w-[6rem] text-lg md:h-16 md:w-16 rounded-[50%] 
            bg-${props.answer.find((question)=>{
                    if(question.qindex == props.questionIndex && question.sindex == props.sectionIndex){
                        return true;
                    }else{
                        return false
                    }
                  })?.status}
        `}
        onClick={()=>{props.sidebarNavigation(props.sectionIndex,props.questionIndex); console.log("called")}}
        >
                  <div className={`mt-[50%] ml-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold `}>{props.questionIndex?props.questionIndex:16}</div>
                </div>
    </>)
}