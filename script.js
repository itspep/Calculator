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
let finalDisplay;
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
      setRawDisplay();
      rawData+="&times"
      rawNum+='';
    }
    else return;
    break;
  case "&divide;":
  case '/':
      if(!overScreen() && !operator()){
        setRawDisplay();
        rawData+='\u00F7';
        rawNum='';
      }
      else return;
      break
    case "&plus;":
    case '+':
      if(!overScreen() && !operator()){
        setRawDisplay();
        rawData+='+';
        rawNum='';
      }
      else return;
      break;
    case '-':
    case "&minus;":
      if(!overScreen() && !operator()){
        setRawDisplay();
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
      setRawDisplay();
      if(validEquation()){
      setCalculator();
      rawNum=rawResult;
    }
    else return;
  }
rawOutput.textContent = rawNum;   

}
