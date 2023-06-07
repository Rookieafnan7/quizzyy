export default function TopBar(props){
    
    return(<>
        <div className="relative h-14 border-b-4 border-interfaceqn">
            <div className="float-left py-2 px-4 bg-interfaceqn drop-shadow-lg rounded-2xl font-semibold">
                Question {props.currentQuestionData?props.currentQuestionData.question:null}
                {/* {console.log(props.quizData)} */}
            </div>
            <div className="float-left ml-6 py-2 px-4 bg-interfaceqn drop-shadow-lg rounded-2xl font-semibold">
                {props.quizDataStore.sections?props.quizDataStore.sections[props.currentQuestionData.section-1].sectionTitle:null}
            </div>
            <div className="float-right py-2 px-4 bg-red-400 text-white font-bold rounded-2xl drop-shadow-lg tracking-wide cursor-pointer 
            hover:bg-white hover:text-red-400 ease-out duration-500 hover:shadow-red-400 hover:shadow-inner hover:drop-shadow-lg" onClick={async()=>{await props.submitAnswer()}}>Exit Quiz</div>
            <div className="float-right py-2 px-4 bg-help font-bold rounded-2xl mr-6 drop-shadow-lg border-white border-2 hover:bg-white hover:shadow-inner
             hover:shadow-help duration-500 ease-out">Help?</div>
        </div>
    </>)
}