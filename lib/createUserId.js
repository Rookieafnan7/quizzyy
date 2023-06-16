import { User } from "../Schema/Quiz";

export default async function  createUserId(){
    const document = await User.findOne({}).sort({userId:-1}).limit(1);
    console.log(document,"document")
    if(document){
        return document.userId + 1;
    }else{
        return 1
    }
}