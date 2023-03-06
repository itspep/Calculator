//get the html elements
const cells=document.querySelector(".cell");//individual squares (numbers, operators)
const input=document.getElementById("myInput"); //input element
const onButton=document.querySelector(".on"); //for when the user turn on the calculator
const ofButton=document.querySelector("off"); //for when the user turn off the calculator
const clear=document.querySelector(".clear"); //for clearing everything and starting over
const plus=document.querySelector(".plus"); //for addition
const times=document.querySelector(".times"); //for multiplication
const minus=document.querySelector(".minus"); //for subtractioln
const divide=document.querySelector(".divide"); //for division
const dot=document.querySelector(".dot");//for the dot
const equal=document.querySelector(".equal"); //for the equal symbol
const myFooter=document.querySelector(".myFooter"); //for the footer
//defining the variables to hold the values or elements from above
let num1="";
let num2="";
//create the function for addition
function add(num1, num2){
    return num1+num2;
}
//create  the function for the subtraction
function minus(num1, num2){
    return num1-num2;
}
//create the multiplication function
function times(num1, num2){
    return num1*num2;
}
//create the division function
function divide(num1, num2){
    return num1/num2;
}
//create the various evenListeners for these functions
//num1 for the first number
cells.addEventListener("click", (event)=>{
    num1+=event.target.textContent;
});
//num2 for the second number
cells.addEventListener("click", (event)=>{
    num2+=event.target.textContent;
});