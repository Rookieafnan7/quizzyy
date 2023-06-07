import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret:process.env.JWT_SECRET,
    callbacks:{
        async jwt({token,user}){
            console.log(token,"token",user,"user")
            return token
        },
        async({session,token,user}){
            console.log(session,"session");
            return session
        }
    }
})