//get the html elements
const buttons=document.querySelectorAll("button");//individual squares (numbers, operators)
const finalOutput=document.getElementById("finalResult"); //to display final results
const rawOutput=document.getElementById("rawResult"); //to display user entery
const offButton=document.getElementById("off"); //for when the user turn off the calculator
const onButton=document.getElementById("on"); //for when the user turn on the calculator
//defining the variables to hold the values or elements from above
let rawNum="";
let rawData="";
let num1="";
let num2="";
let rawResult;
let finalDisplay="";
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

function getData(event){
  let num="";
  if(event.key===undefined){
    num=this.id;
  }
  else{
    num=event.key;
  }
  switch(num){
    case '0':
      resetOutput();
      if(!overScreen()){
        rawNum+='0';
      }
      break;
    case '1':
      resetOutput();
      if(!overScreen()){
        rawNum+='1';
      }
      break;
    case '2':
      resetOutput();
    if(!overScreen()){
      rawNum+='2';
    }
    break;
  case '3':
    resetOutput();
    if(!overScreen()){
      rawNum+='3';
    }
    break;
  case '4':
    resetOutput();
    if(!overscreen()){
      rawNum+='4';
    }
    break;
  case '5':
    resetOutput();
    if(!overScreen()){
      rawDisplay+='5';
    }
    break;
  case '6':
    resetOutput();
    if(!overScreen()){
      rawNum+='6';
    }
    break;
  case '7':
    resetOutput();
    if(!overScreen()){
      rawNum+='7';
    }
    break;
  case '8':
    resetOutput();
    if(!overScreen()){
      rawNum+='8';
    }
    break;
  case '9':
    resetOutput();
    if(!overScreen()){
      rawNum+='9';
    }
    break;
  case '&times;':
  case '*':
  case 'x':
  case 'X':
    if(!overScreen() && !operator()){
      setFinalDisplay();
      rawData+="&times"
      rawNum+='';
    }
    else return;
    break;
  case "&divide;":
  case '/':
      if(!overScreen() && !operator()){
        setFinalDisplay();
        rawData+='\u00F7';
        rawNum='';
      }
      else return;
      break
    case "&plus;":
    case '+':
      if(!overScreen() && !operator()){
        setFinalDisplay();
        rawData+='+';
        rawNum='';
      }
      else return;
      break;
    case '-':
    case "&minus;":
      if(!overScreen() && !operator()){
        setFinalDisplay();
        rawData+='-';
        rawNum='';
      }
      else return;
      break;
    case '.':
      if(rawDisplay.length==0){
        rawNum+="0.";
      }
      else if(!overScreen() && !period()){
        rawNum+='.';
      }
      break;
    case "AC":
    case "Delete":
    case "Escape":
    case "clear":
      resetOutput();
      rawData="";
      rawNum="";
      break;
    case 'C':
    case "Backspace":
      resetOutput();
      backspace();
      break;
    case '=':
    case "Enter":
    case "equals":
      setFinalDisplay();
      if(setValidEquation()){
      setCalculator();
      rawNum=rawResult;
    }
    else return;
  }
rawOutput.textContent = rawNum;   
setRawDisplay();
}
//determine the number of figures that can be displayed at one time
function overScreen(){
  if (rawNum.length>=12 || rawData>=45){
    exponentiation();
    return true;
  }
  else return false;
}
//set the operator function to determine if the number already has an operator
function operator(){
  if(rawNum.length !=0 || rawData.charAt(rawData.length-1).match(/[\d\.]/)){
    return false;
  }
  else return true;
}
//set a divide by zero function to determine if a user is about to divide by zero
function divisionByZero(){
  if(rawData.charAt(rawData.length-2).match(/\//) && rawNum.length==0){
    return true;
  } 
  else return false; 
}
//set the backspace functions
function backspace(){
  //check to see if there is a raw number, then delete it first
  if(rawNum>=1){
    let rawNumArray=rawNum.split('');
    rawNumArray.pop();
    let rawNumString=rawNumArray.join('');
    rawNum=rawNumString;
  }
  else{
    let rawDataArray=rawData.split('');
    //check to see if there is a space at the end
    if(rawDataArray.length>=1 && rawDataArray[rawDataArray.length-1].match(/\s/)){
      rawDataArray.pop();
      rawDataArray.pop();
      rawDataArray.pop();
    }
    else{
      rawDataArray.pop();
    }
    let rawDataString=rawDataArray.join('');
    rawData=rawDataString;
  }
}
//set the function for the final display
function setFinalDisplay(){
  if(finalDisplay.length==0){
    rawData+=rawNum;
  }
  else{
    rawData=rawNum;
    finalDisplay="";
  }
}
//define a function to clear the final display results
function clearFinalDisplay(){
  if(finalDisplay !=0){
    finalDisplay="";
  }
}
//a function to determine if the equation is a valid one or not
function setValidEquation(){
  if(rawData.charAt(rawData.length-1).match(/\d/)){
    return true;
  }
  else return false;
}
//set the calculation
function setCalculator(){
  let rawDataArray=rawData.split('');
  finalDisplay=rawDataArray.join('');
  makeCalculation();
}
//make the calcualtion
function makeCalculation(){
  if(finalDisplay.match(/\*|\//)){
    multiplyOrDivide();
  }
  else if(finalDisplay.match(/[\s][\+|\-][\s]/)){
    addOrSubtract();
  }
  else if(finalDisplay.length>12){
    formatFinalDisplay();
    return finalDisplay;
  }
  else return finalDisplay;
}
function multiplyOrDivide(){
  let formular=/(\-?)[\d]+(\.?)[\d]*[\s][\*|\/][\s](\-?)[\d]+(\.?)[\d]*/;
  let formularMatch=finalDisplay.match(formular)[0];
  //determine wether the operator is a multiplication or division
  let timesordivision=formularMatch.match(/\*|\//)[0];
  //find the first number or operand
  let firstNumber = /(\-?)[\d]+(\.?)[\d]*/g;
  num1=formularMatch
}



function exponentiation(){
  const exponentiation=toExponentialNotation(rawNum);
}