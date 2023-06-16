import { User } from "../Schema/Quiz";
import mongoConnect from "./mongoConnect";

export default async function fetchUserDB(email){
    await mongoConnect();
    const user = await User.findOne({userEmail:email});
    // console.log(user,"user found")
    return user;
}