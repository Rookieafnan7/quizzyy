const mongoose = require('mongoose');
import {Schema,model,models} from 'mongoose';
// const optionsSchema = new mongoose.Schema({
//     options
// })
const questionSchema = new Schema({
    number:Number,
    id:Number,
    type:String,
    marks:Number,
    options:[{opId:Number,optionDesc:String}],
    correctOptionId:Number,
})

const sectionSchema = new Schema({
    sectionTitle:String,
    questions:[questionSchema]
})

const quizSchema = new Schema({
    quizName:String,
    quizDescription:String,
    createdBy:String,
    sections:[sectionSchema],
})
mongoose.set('strictQuery', false);

const Question = models.question || new model("question",questionSchema);
const Section =  models.section || new model("section",sectionSchema);
const Quiz =  models.quiz || new model("quiz",quizSchema);


//important
//url will change with system config

// mongoose.connect("mongodb://127.0.0.1:27017/quizDB");


export {Question,Section,Quiz};

