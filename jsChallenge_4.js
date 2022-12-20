// coding challange 4
/*
let's remember the first coding challenge whare Har and jon copared their BMIs. Let's now  impement the same functionalty with object and methods.

1) For each of them create an object with properties for their full name, mass and height
2) then, add a method to  each object to calculate the BMI Save the BMI to the object and also return it from the method.
3). In the end, log to the console who has the highest BMI. Don't forget they might have the same BMI

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/



let prakash = {
    fullname: 'prakash singh rawat',
    mass: 70,
    height: 1.70,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
}

let akash = {
    fullname: 'akash singh rawat',
    mass: 70,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
prakash.calcBMI();
akash.calcBMI();
console.log(prakash , akash);

if (prakash.bmi > akash.bmi){
    console.log(`${prakash.fullname} has a higher bmi is ${prakash.bmi}`);
}
else if ( akash.bmi > prakash.bmi){
    console.log(`${akash.fullname} has a higher bmi is ${akash.bmi}`);
}
else{
    console.log("they are equal");
}