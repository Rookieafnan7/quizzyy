import Navbar from "../../components/navbar"
import { useSession } from "next-auth/react"
export default function createQuiz(){

    const {data:session,status} = useSession({required:true})
    return(
        <>
            <Navbar/>
            <div className="lg:mx-16 md:mx-10 mx-4">
                <div className="margin-0 create-quiz-container">
                    <span className="inline-block bg-createquiz px-4 py-2 text-lg font-bold text-white mt-4 rounded-2xl tracking-wider">
                        Create Your Quiz
                    </span>
                </div>
                <div className="bg-createquizprimary rounded-xl md:flex md:justify-evenly mt-4 px-4 py-4">
                    <div className="md:w-[30%] border-black ">
                        <div className="info-header text-sm font-semibold pl-2 ">
                            Quiz Name :
                            </div>
                    </div>
                    <div className="md:w-[30%]">
                        <div className="info-header text-sm font-semibold pl-2 mt-8 md:mt-0">
                            Quiz Description :    
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )


}