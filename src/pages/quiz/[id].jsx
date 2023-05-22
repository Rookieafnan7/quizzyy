import { useRouter } from "next/router";
export default function Quiz() {
  const router = useRouter()
  // return <p>{router.query.id}</p>;
  return(
    <><nav className="bg-navbar py-2 px-8 text-center md:text-start">
        <div className="font-bold font-poppins text-white text-4xl inline-block">Quizzy</div>
    </nav>
    <div className="lg:mx-16 md:mx-10 mx-4">
      <h2 className="md:mt-6 mt-2 bg-title text-2xl text-white font-semibold font-poppins px-8 py-2 rounded-2xl shadow-lg text-center md:text-start">
        Test Quiz
      </h2>
      <div className="md:grid md:grid-cols-8 lg:grid-cols-10 gap-10 ">
        <div className="md:col-span-6 lg:col-span-8">
          <div className="description mt-4 md:mt-6 bg-description rounded-2xl shadow-lg font-poppins text-black px-4 py-2 text-center md:text-start md:max-h-ideal md:overflow-y-scroll" >
            <h2 className="font-semibold font-poppins text-lg px-6 mt-2">About the Quiz</h2>
            <hr className="h-0.5 w-96 bg-gray-100 border-0 rounded"/>
            <p className="font-poppins px-6 py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vivamus consequat tempus diam a cursus. Integer nec faucibus turpis, sit amet posuere nunc. Nullam at auctor nisi.
              Sed bibendum et lacus eu ultrices. Vestibulum blandit metus ligula, a feugiat ligula cursus et. Ut mollis iaculis sapien.
               Mauris pulvinar porttitor interdum.
            </p>
          </div>
        </div>
        <div className="info lg:col-span-2 md:col-span-2 mt-4 md:mt-0">
          <div className="createdby md:mt-6 rounded-2xl shadow-lg font-poppins text-black px-6 py-4 lg:px-10 lg:py-4 bg-createdby my-auto">
            <p className="text-sm mb-2 my-auto">Created By</p>
            <h3 className="text-md font-bold my-auto">Afnan Nizam</h3>
          </div>
          <div className="quizspecifics md:mt-6 rounded-2xl shadow-lg font-poppins text-black  px-6 py-4 lg:px-10 lg:py-4 bg-quizspecifics">
            <h3 className="text-md font-bold mb-2">25 Questions</h3>
            <h3 className="text-md font-bold mb-2">2 Sections</h3>
            <h3 className="text-md font-bold mb-2">100 Marks</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}