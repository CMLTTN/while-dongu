
// let grade = Number(prompt("your grade:"))

// // if(grade < 0 || grade > 100 ){
// //     console.log("incorrect grade");

// // }
// while(grade < 0 || grade > 100){
//     console.log("Grade should be 0-100");
//     grade = Number(prompt("your grade:"))

// }
// console.log(`Your Grade:", ${grade}`);
let counter = 0;
let number = Number(prompt("your number:"))

while (number != 0 ){

number = Math.trunc(number / 10)
console.log(number);
counter++;

}
console.log(`Digit count is ${counter}`);

