//  coding challenge  1 


/*
Mark and john  are trying to copare their BMI {Body mass index}, which is calculated using the formula:
BMI = mass / height ^ 2 = mass / (height * height),
(mass ing kg and height in meter).

1) store Mark's and John's mass and height in variables 
2) calculate both their BMIs
3) Cteate a boolean variable containgin information about whether Mark has a higher BMI than John.
4) Print a string to the console containg the variable from step 3>(something like "Is Mark's BMI higher then's? true"). 

*/

let massMark = 50;
let heightMark = 1.50;

let massJohn = 40;
let heightJohn = 1.60;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(`john mass is ${BMIJohn} & mass of mark is ${BMIMark}`);

if (massJohn > massMark){
    console.log(`john is higher then mark`);
}
else if (massMark > massJohn){
    console.log(`mark is higher then john `);
}
else {
    console.log("they are equal mass is john and mark ");
}