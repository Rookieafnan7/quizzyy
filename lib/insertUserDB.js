import { User } from "../Schema/Quiz";
import createUserId from "./createUserId";

export default async function insertUserDB(user){
    let userDocument = {
        userEmail : user.email,
        userName :user.name,
    }
    userDocument.userId = await createUserId()
    console.log(userDocument,"userDocument");
    await User.insertMany([userDocument]);
    return userDocument
}