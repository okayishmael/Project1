//Author:Ishmael Sunday | github.com/okayishmael
//Code 201 Project1 @ Code Partners > https://codepartners.net

let instruction = alert("Hello and welcome to Code 2o1. We need to collect some information (Name, Current City, Gender and confirm if you are a coder) from you before you can access the site.")
let name = prompt("What\'s your name?"); //declare var use prompt to display value in browser and collect user input
if (name != null){
alert("Hi "+ name +"! Please click the \"OK button\" to enter your current city.")}; // using alert function. no input
let origin = prompt(" Enter your current City:"); // prompt, input require
let gender = prompt("Please enter your Gender:");// prompt, input require
let coder = prompt('Finally, are you a coder?'); // declare var confirm to collect user input

console.log(name); // printing place function name in the paranthesis 
console.log(origin); // printing place function name in the paranthesis 
console.log(gender); // printing place function name in the paranthesis 
console.log(coder); // printing place function name in the paranthesis 

// Displaying user's input into the html page.

//Name

if(name){
    document.getElementById('name').innerText = name
} 
// Origin/Current City
if(origin){
    document.getElementById('origin').innerText = origin
} 
//user Gender
if(gender){
    document.getElementById('gender').innerText = gender
} 
//Is user a coder. True or false wil be displyed
if(coder){
    document.getElementById('coder').innerText = coder
};
// function that hold a mini quiz prompt
let miniQuiz =function() {
let correctAnswer = 'is'; // Correct/Expected Answer
let instruction = prompt('Enter the correct verb. \n My name ____ Ishmael.'); //Instruction/Question/get user input
//Check if it matches the correct answer specified in line 38

if(instruction === correctAnswer) {
    alert('YES, GREAT JOB! Ishmael is noun and goes with a singular verb, IS.\n You are done. Goodbye!'); //If yes, show user this
} else{
    alert('Sorry! We need a singular verb. Try another time. Goodbye!');//if no, show user this   
}
};
document.getElementById('miniquiz').innerHTML =  'Take the Quiz' ;
 
