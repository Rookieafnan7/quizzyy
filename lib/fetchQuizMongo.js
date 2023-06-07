import mongoConnect from "./mongoConnect";
import { Quiz } from "../Schema/Quiz";
import removeAttribute from "./removeAttribute";
export default async function fetchQuizMongo(id){
    try{
        await mongoConnect();
        const results = await Quiz.findOne({quizId:id});
        // const modifiedResults = await removeAttribute(results);
        // console.log(results)
        if(results){
            return results;
        }else{
            return undefined
        }
    }catch(err){
        console.log(err)
        return undefined
    }
}


// let test = {
//   quizName:"test2",
//   quizDescription:"blabla",
//   createdBy:"Afnan Nizam",
//   quizId:1,
//   sections:[{
//     sectionTitle:"Section 1",
//     sectionId:1,
//     questions:[{
//         id:1,
//         marks:4,
//         description:"What color is the sky?",
//         options:[{
//             opId:1,
//             optionDesc:"Blue"
//         },{
//             opId:2,
//             optionDesc:"Red"
//         }],
//         correctOptionId:1
//     },{
//       id:2,
//       marks:4,
//       description:"Un poco loco",
//       options:[{
//         opId:1,
//         optionDesc:"Unpoquitito Loco"
//       },{
//         opId:2,
//         optionDesc:"Unpoco loco"
//       },{
//         opId:3,
//         optionDesc:"Unpoquototot"
//       }],
//       correctOptionId:1
//     }]
//   },
//   {
//     sectionTitle:"Section 2",
//     sectionId:2,
//     questions:[
//       {
//         description:"What is my name",
//         id:1,
//         marks:4,
//         options:[
//           {
//             opId:1,
//             optionDesc:"Afnan"
//           },{
//             opId:2,
//             optionDesc:"Nizam"
//           },{
//             opId:3,
//             optionDesc:"Raghav"
//           },
//           {
//             opId:4,
//             optionDesc:"Anish"
//           }
//         ],
//         correctOptionId:1
//       },{
//         description:"What am I",
//         id:2,
//         marks:4,
//         options:[
//           {
//             opId:1,
//             optionDesc:"Human"
//           },{
//             opId:2,
//             optionDesc:"Demigod"
//           },{
//             opId:3,
//             optionDesc:"Dog"
//           },{
//             opId:4,
//             optionDesc:"Cat"
//           }
//         ]
//       }
//     ]
//   }]
// }


/*


{quizName:"test",quizDescription:"blabla",createdBy:"Afnan Nizam",quizId:1,sections:[{sectionTitle:"Section 1",sectionId:1,questions:[{id:1,marks:4,description:"What color is the sky?",options:[{opId:1,optionDesc:"Blue"},{opId:2,optionDesc:"Red"}],correctOptionId:1}]}]}

*/