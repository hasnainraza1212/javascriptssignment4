// question 1
// var city = prompt("Enter your city?")
// if (city === "karachi" || city === "Karachi") {
//     alert("Welcome to the city of lights")
// }



// question2
// var gender = prompt("What's your gender?");
// if (gender === "male" || gender === "Male"){
//     alert("Good morning sir!!")
// }
// else if (gender === "Female" || gender === "female"){
//     alert("Good morning Maam!!")
// }
// else {
//     alert("good morning")
// }



// question3
// var trafficLightColor = prompt("Enter traffic signl color like red, green or yellow", "red");
// if (trafficLightColor === "red"){
//     alert("Must stop!!")
// }
// else if (trafficLightColor === "green"){
//     alert("Go now!!")
// }
// else if (trafficLightColor === "yellow"){
//     alert("Ready to go!!")
// }
// else{
//   alert("invalid input!!")
// }




// question 4

// var remainingFuel = +prompt("Enter the REMAINING fuel " , .25);
// if (remainingFuel < .25) {
//     alert("“Please refill the fuel in your car”")
// }



// question5a

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// question5b

// var b = 82;

// if (b++ === 83){
// alert("given condition for variable b if false");
// }


// question5c

// var c = 12;
// if (c++ === 13){
// alert("condition false");
// }


// if (c === 13){
//     alert("condition is true");
//     }


// if (++c < 14){
//     alert("condition is true");
//     }



// if(c === 14){
//     alert("condition is false");
//     }

// question5d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// question5e

// if (true){
//     alert("True");
//     }

//     if (false){
//         alert("False");
//         }


// question5f

//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// question6
// var maxMarks = 300;
// var obtainedMarks = prompt("Enter you marks",290);
// var percentage = obtainedMarks/maxMarks*100;

// if(percentage >= 80) {
//     alert("A-one grade "+ "Excllent " + percentage + "%")
// }

// else if(percentage >= 70) {
//     alert("A grade "+ "Good " + percentage + "%")
// }

// else if(percentage >= 60) {
//     alert("B grade "+ "Need to improve " + percentage + "%")
// }

// else if(percentage < 60) {
//     alert( "Fail " + percentage + "%")
// }


// question7
// var secretNumber = 0;
// var userGuess = prompt("Guess a number!!");
// if (userGuess === secretNumber){
//     alert("Bingo! correct answer")
// }
// else if(userGuess > 0){
//     alert("No think slightly smallar number");
// }
// else if(userGuess < 0){
//     alert("No think slightly bigger number");
// }



// question8


// var userInputNumber = +prompt("Enter a number to and know whether it is divisible by 3 or not!!")
// var divisibility = userInputNumber % 3;
// if (divisibility === 0){
//     alert(userInputNumber+ " is divisible by 3")
// }
// else{
//     alert(userInputNumber + " is not divisible by 3")
// }




// question9


// var userInputNumber = +prompt("Enter a number to and know whether it is even or odd!!")
// var divisibility = userInputNumber % 2;
// if (divisibility === 0){
//     alert(userInputNumber+ " is even")
// }
// else{
//     alert(userInputNumber + " is odd")
// }


// question10
// var temperature = prompt("Enter the temperature");
// if(temperature >= 40){
//     alert("It is too hot outside.")
// }
// else if(temperature >= 30){
//     alert("The Weather today is Normal.")
// }
// else if(temperature >= 20){
//     alert("Today’s Weather is cool.")
// }
// else if(temperature >= 10){
//     alert("OMG! Today’s weather is so Cool.")
// }




// question11
// var number1 = +prompt("enter num1");
// var number2 = +prompt("enter num2");
// var operator = prompt("type the operator");
// if(operator === "+"){
//     var sum = number1 + number2;
//     alert(sum);
// }
// else if(operator === "-"){
//     var sub = number1 - number2;
//     alert(sub);
// }
// else if(operator === "*"){
//     var mul = number1 * number2;
//     alert(mul);
// }
// else if(operator === "/"){
//     var div = number1 / number2;
//     alert(div);
// }
// else if(operator === "%"){
//     var rem = number1 % number2;
//     alert(rem);
// }





//chapter 12-13
// question 1
// var userInputForUpperOrLowerCase =  prompt("Just type a character JS will tell you, it's in upper case or in lower case ");
// var index = 0;
// var asciiCode = userInputForUpperOrLowerCase.charCodeAt(index);
// if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("UPPER CASE!!")
// }

// else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("lowercase!!")
// }
// else {
//     alert("not a letter!!")
// }