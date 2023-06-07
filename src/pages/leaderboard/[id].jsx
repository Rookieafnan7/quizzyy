import { useEffect, useState } from "react"
import Navbar from "../../../components/navbar"
import { useRouter } from "next/router"
export default function Leaderboard(){
    const router = useRouter()
    const [leaderboardData,setLeaderboardData] = useState([])
    const id = router.query.id
    useEffect(()=>{
        async function fetchLeaderboardData(){
            try{
                if(router &&  router.query && router.query.id){
                    const url = "/api/fetchLeaderboardData"
                    const response = await fetch(url,{
                        method:'POST',
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify({quizId:id})
                    })
                    const result = await response.json()
                    console.log(result);
                }
            }catch(err){
                console.log(err);
            }
        }
        // fetchLeaderboardData()
    })
    return(<>
        <Navbar/>
        <div className="lg:mx-16 md:mx-10 mx-4">
            <span className="md:mt-6 mt-4 inline-block bg-leaderboard text-white font-semibold text-xl px-4 py-2 rounded-2xl" >Leaderboard</span>
            {/* <span>sort by</span> */}
            <div className="mt-6">
            <div className="flex justify-between rounded-2xl bg-leaderboarddata py-4 px-16 text-md mb-2">
                <span className="inline-block text-bold tracking-wider">hello</span>
                {/* <span className="inline-block">time taken</span> */}
                <span className="inline-block">Score</span>
            </div>

        </div>
        </div>
        
    </>)
}