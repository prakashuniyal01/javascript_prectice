/*
john and family wendt on a holiday and to 3 differnt restoreents
the bills were $124 , $48 and $268 

To tip the waiter a fair amount, john create a simple tip calculator (asa fuction)
.
He likes to tip20% of the bill when the bill is less than  $50,
15% when the bill is between $50 and $200 ,
and 10% if the bill is more than $200
In the end, john would like to have 2 arrays:
1) Containg all three tip (one for each bill)
2) containing all three final paid amounts  (bill + tip)


(NOTE :  TO calculate 20% of a value,  simply multiply if with 20/100 = 0.2)
*/

function tipCalculator(bill){
    let parcentage;
    if(bill < 50){
        parcentage = .2;
    }
    else if(bill >= 50 && bill <= 200){
        parcentage = .15;
    }
    else{
        parcentage =.1
    }
    return parcentage * bill;
}
let bills =[124, 48, 268];
let tips = [tipCalculator(bills[0]),
           tipCalculator(bills[1]),
           tipCalculator(bills[2])];
console.log(tips);
// the value of array store in second array
let finalvalue =[
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(finalvalue);