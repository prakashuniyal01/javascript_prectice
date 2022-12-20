/*  **************************************************************
         coding challenge 2 
*/


/*
John and Mike both play basketboll in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points , while Mike's team scored 116 , 94 and 123 points.

1) calculate the averfe score for each team
2) Becide which team winds in average (highest averafe score), and print the winner to the console.Alse include the average score in the output.
3) then change the scores to show differnt winners. don't forget to take account there minght be a drow(the same average score)
4) eXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the avereage winner to the console. HINT: you will need the && operator to tahe the decision If you can't solve this one, just watch the solution, it's no problem :)
5) Like beofre , change the scores to generate siffernt winners, keeping in mind there might be drows.
*/ 

let scorejohn = (122 + 123 + 193)/3;
let scoremike = (116 + 94 + 123)/3;
let scoremary = (98 + 198 + 122)/3;

console.log(scorejohn , scoremike ,scoremary);

if(scorejohn > scoremike && scorejohn > scoremary){
    console.log(`johns teams win ${scorejohn} points`);
}
else if(scoremike > scorejohn && scoremike > scoremary){
    console.log(`mike teams win ${scoremike} points`);
}
else if(scoremary > scorejohn && scoremary > scoremike){
    console.log(`mary teams win ${scoremary} points`);
}
else{
    console.log("there is a drow");
}


// if (scorejohn > scoremike){
//     console.log(`john teams wins${scorejohn}`);
// }
// else if (scoremike > scorejohn){
//     console.log(`mike teams wins${scoremike}`);
// }
// else{
//     console.log("they are equal");
// }