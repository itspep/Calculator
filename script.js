//get the html elements
const cells=document.querySelectorAll(".cell");//individual squares (numbers, operators)
const input=document.getElementById("myInput"); //input element
const onButton=document.querySelector(".on"); //for when the user turn on the calculator
const offButton=document.querySelector(".off"); //for when the user turn off the calculator
const clear=document.querySelector(".clear"); //for clearing everything and starting over
/*const plus=document.querySelector(".plus"); //for addition
const times=document.querySelector(".times"); //for multiplication
const minus=document.querySelector(".minus"); //for subtractioln
const divide=document.querySelector(".divide");*/ //for division
const operators=document.querySelectorAll(".operator")
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
//create the various eventListeners for these functions
//num1 for the first number
cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      num1 += event.target.textContent;
      input.innerText="num1";
    });
  });
  
  //num2 for the second number
  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      num2 += event.target.textContent;
      //display the inputed data
      input.innerText+="num2";
    });
  });
  let myOperator;
  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      // perform calculation and update input field
    myOperator=event.target.textContent;
    input.innerText+="myOperator";
    });
  });

//eventListeners for other buttons (clear, dot, equal, on, off)
clear.addEventListener("click", () => {
    // clear input field and reset variables
    input.textContent="";
  });
  
  dot.addEventListener("click", () => {
    // add decimal point to input field
    
  });
  
  equal.addEventListener("click", () => {
    // perform calculation and update input field
  });
  
  onButton.addEventListener("click", () => {
    // turn on calculator
  });
  
  offButton.addEventListener("click", () => {
    // turn off calculator
  });