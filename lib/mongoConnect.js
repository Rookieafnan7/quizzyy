const mongoose = require("mongoose");
async function mongoConnect(){
    await mongoose.connect("mongodb://127.0.0.1:27017/quizDB");
    // console.log("func called");
}

export default mongoConnect;