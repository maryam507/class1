// var readline = require('readline');
// var takeInput = readline.createInterface(process.stdin,process.stdout);
// functionsum(sum){
//     console.log(sum)
// }
// takeInput.question("what is the first num?",function(value1){
//   takeInput.question("what is the second num?",function(value2))
//   var sum =parseInt(value1)+parseInt(value2)
//   sum(sum);

//     console.log(value)
//     // console.log(value2)
//     takeInput.close(

//     )

// })

var Readline = require('readline');
var takeInput = Readline.createInterface(process.stdin,process.stdout);
// var schoolmanagement ={
//     name : "Maryam Nisha",
//     fname :  "nazim ali khan",
//     grade : "9",
//     lastmarks : "90",
//     // rollnum = 57,
//     passingmarks : "60",
//     rollnum : "57"}
takeInput.question("what is the name of a student?", function(name){
    takeInput.question("what is the fname of a student?", function(fname){
        takeInput.question("what is the last passing marks of a student?", function(value){
            takeInput.question("what is the rollnum of a student?", function(fname){
                akeInput.question("what is the fees structure of a school?", function(fees){



        takeInput.close()
   })
})
})
})
})
    //  takeInput.close()
// })
//  console.log(schoolmanagement.name);
//  console.log(schoolmanagement.fname);
//  console.log(schoolmanagement.grade);
//  console.log(schoolmanagement.lastmarks);
//  console.log(schoolmanagement.passingmarks);
//  console.log(schoolmanagement.rollnum)