import fetchUserDB from "../../../lib/fetchUserDB";
import insertUserDB from "../../../lib/insertUserDB";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function fetchUser(req,res){
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        res.status(403).send({message:"Forbidden"})
    }
    try{
        if(req.body){
            let user = await fetchUserDB(req.body.user.email);
            if(user){
                console.log(user,"user");
            }else{
                user = await insertUserDB(req.body.user);
            }
            res.send({user:user,status:true})
        }else{
            throw new Error("No body passed")
        }
    }catch(err){
        res.send({status:false,error:err})
    }
}