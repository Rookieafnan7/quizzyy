import fetchUserDB from "../../../lib/fetchUserDB";
import insertUserDB from "../../../lib/insertUserDB";

export default async function fetchUser(req,res){
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