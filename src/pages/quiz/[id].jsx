import { useRouter } from "next/router";
import Navbar from "../../../components/navbar"
export default function Quiz() {
  const router = useRouter()
  // return <p>{router.query.id}</p>;
  return(
    <div className="margin-0">
    <Navbar/>
    <div className="lg:mx-16 md:mx-10 mx-4">
      <h2 className="md:mt-6 mt-2 bg-title text-2xl text-white font-semibold font-poppins px-8 py-2 rounded-2xl shadow-lg text-center md:text-start">
        Test Quiz
      </h2>
      <div className="md:grid md:grid-cols-8 lg:grid-cols-10 gap-10 ">
        <div className="md:col-span-6 lg:col-span-8">
          <div className="description mt-4 md:mt-6 bg-description rounded-2xl shadow-lg font-poppins
           text-black px-4 py-2 text-center md:text-start md:max-h-ideal md:overflow-y-scroll border-2 border-white" >
            <h2 className="font-semibold font-poppins text-lg px-6 mt-2 tracking-wide">About the Quiz</h2>
            <hr className="h-0.5 w-96 bg-gray-100 border-0 rounded"/>
            <p className="font-poppins px-6 py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vivamus consequat tempus diam a cursus. Integer nec faucibus turpis, sit amet posuere nunc. Nullam at auctor nisi.
              Sed bibendum et lacus eu ultrices. Vestibulum blandit metus ligula, a feugiat ligula cursus et. Ut mollis iaculis sapien.
               Mauris pulvinar porttitor interdum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vivamus consequat tempus diam a cursus. Integer nec faucibus turpis, sit amet posuere nunc. Nullam at auctor nisi.
              Sed bibendum et lacus eu ultrices. Vestibulum blandit metus ligula, a feugiat ligula cursus et. Ut mollis iaculis sapien.
               Mauris pulvinar porttitor interdum.
            </p>
          </div>
        </div>
        <div className="info lg:col-span-2 md:col-span-2 mt-4 md:mt-0">
          <div className="createdby md:mt-6 rounded-2xl shadow-lg border-2 border-quizspecifics font-poppins text-black px-6 py-4 lg:px-10 lg:py-4 bg-createdby my-auto">
            <p className="text-sm mb-2 my-auto">Created By</p>
            <h3 className="text-md font-bold my-auto">Afnan Nizam</h3>
          </div>
          <div className="quizspecifics md:mt-6 rounded-2xl shadow-lg font-poppins border-4 border-createdby text-black  px-6 py-4 lg:px-10 lg:py-4 bg-quizspecifics">
            <h3 className="text-md font-bold mb-2">25 Questions</h3>
            <h3 className="text-md font-bold mb-2">2 Sections</h3>
            <h3 className="text-md font-bold mb-2">100 Marks</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="startdiv mt-4 pb-2 sticky bottom-0 flex align-middle justify-center transition-500 ease-out">
      <a className="text-white border-2 border-white bg-startquiz font-poppins px-4 py-2 font-semibold tracking-wide rounded-xl text-lg 
      shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:border-startquiz ease-out duration-500 hover:text-startquiz">Start Quiz</a>
    </div>
    </div>
  )
}