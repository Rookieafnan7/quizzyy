import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import fetchUserDB from "../../../../lib/fetchUserDB";
import insertUserDB from "../../../../lib/insertUserDB";
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret:process.env.JWT_SECRET,
    callbacks:{
        async signIn({ user, account, profile, email, credentials }){
            console.log(user, account, profile, email, credentials ,"{ user, account, profile, email, credentials }")
            return true
        },
        async jwt({token,user}){
            // console.log(token,"token")
            let userDataToken = {
                email:token.email,
                name:token.name
            }
            let userData = await fetchUserDB(userDataToken.email);
            if(!userData)
                userData = await insertUserDB(userDataToken);
            token.userData = {
                userId:userData.userId,
                userName:userData.userName,
                userEmail:userData.userEmail
            }

            return token
        },
        async session({session,token,user}){
            session.userData = token.userData
            return session
        }
    }
})