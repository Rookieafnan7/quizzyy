const mongoose = require('mongoose');
import {Schema,model,models} from 'mongoose';
// const optionsSchema = new mongoose.Schema({
//     options
// })
const answerSchema = new Schema(
    {   
        attemptNo:Number,
        answer:[{
            qindex:Number,
            sindex:Number,
            qid:Number,
            sid:Number,
            checkedOption:Number,
            status:String
        }],
        userId:Number,
        userName:String,
        quizId:Number,
        attempStartTime:Date,
        attemptEndTime:Date,
        submitTime:Date,
        marks:Number,
        closed:Boolean,
        attemptClosingTime:Date,
        finalSubmit:Boolean,
    }
)
const questionSchema = new Schema({
    number:Number,
    desctiption:String,
    id:Number,
    type:String,
    marks:Number,
    options:[{opId:Number,optionDesc:String}],
    correctOptionId:Number,
})

const sectionSchema = new Schema({
    sectionTitle:String,
    sectionId:Number,
    questions:[questionSchema]
})

const quizSchema = new Schema({
    attemptOnce:Boolean,
    quizCreationDate:Date,
    quizName:String,
    userName:String,
    quizDescription:String,
    createdBy:String,
    quizId:Number,
    userId:Number,
    sections:[sectionSchema],
    duration:Number,
    quizAvailability:String,
    startDateTime:Date,
    endDateTime:Date,
    quizClosingTime:Date,
    totalMarks:Number,
    totalQuestions:Number,
    totalSections:Number,
})
const userSchema = new Schema({
    userId:Number,
    userName:String,
    userEmail:String,
    verified:Boolean
})
mongoose.set('strictQuery', false);

const User = models.user || new model("user",userSchema);
const Question = models.question || new model("question",questionSchema);
const Section =  models.section || new model("section",sectionSchema);
const Quiz =  models.quiz || new model("quiz",quizSchema);
const Answer = models.answer || new model("answer",answerSchema);

//important
//url will change with system config

// mongoose.connect("mongodb://127.0.0.1:27017/quizDB");


export {Question,Section,Quiz,Answer,User};

