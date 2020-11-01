function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function square(num1) {
     
    return Math.sqrt(num1);
  }
  
  var buttons = document.getElementsByClassName("button");
  for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].addEventListener("click", function(event) {
      handleInput(event.target.innerHTML);
    }, false);
  }
  
  function display(result) {
    document.getElementsByClassName("screen")[0].innerHTML = result;
  }
  
  var operand1 = "", operand2 = "";
  var operator = "", justComputed = false;
  function handleInput(input) {
    switch(type(input)) {
      case "digit":
        handleDigit(input);
        break;
      case "operator":
        handleOperator(input);
        break;
      case "CLEAR":
        handleClear();
        break;
      case "=":
        display( handleEquals() );
        break;
        case "√":
            handleSquare();
            break;
        case "±":
            handleMinus();
            break;
      default:
        display("ERROR");
    }
  }

  function handleSquare() {
    if (justComputed) {
      operand1 = "";
      operand2 = "";
      operator = "";
      justComputed = false;
    }
    
    if (operator === "") {
    if(operand1<0)operand1='Error';
    else {operand1 = square(parseFloat(operand1));
      operand1=Math.trunc(operand1 * 10000) / 10000;}
      display(operand1);
    } else {
        if(operand2<0)operand2='Error';
        else {
      operand2  = square(operand2);
      operand2=Math.trunc(operand2 * 10000) / 10000;}
      display(operand2);
    }
  }

  function handleMinus() {
    if (justComputed) {
      operand1 = "";
      operand2 = "";
      operator = "";
      justComputed = false;
    }
    if (operator === "") {
      operand1 += "-";
      display(operand1);
    } else {
      operand2 += "-";
      display(operand2);
    }
  }
  
  function handleDigit(input) {
    if (justComputed) {
      operand1 = "";
      operand2 = "";
      operator = "";
      justComputed = false;
    }
    if (operator === "") {
      operand1 += input;
      display(operand1);
    } else {
      operand2 += input;
      display(operand2);
    }
  }
  
  function handleOperator(input) {
    if(operand2 !== "") {
      display(handleEquals());
    }
    justComputed = false;
    operator = input;
  }
  
  function handleClear() {
    operand1 = "";
    operand2 = "";
    operator = "";
    display(0);
  }
  
  function handleEquals() {
    var result;
    justComputed = true;
  
    if(operand2 === "") {
      operand2 = operand1;
    }
    switch(operator) {
      case "":
        return operand1;
        break;
      case "+":
        result = add(parseFloat(operand1), parseFloat(operand2));
        break;
      case "-":
        result = subtract(parseFloat(operand1), parseFloat(operand2));
        
        break;
      case "×":
        result = multiply(parseFloat(operand1), parseFloat(operand2));
        break;
      case "÷":
        result = divide(parseFloat(operand1), parseFloat(operand2));
        break;
      case "^":
        result = Math.pow(parseFloat(operand1), parseFloat(operand2));
        break;

      default:
        display("OP ERROR");
    }
    result=Math.trunc(result * 10000) / 10000;
    operand1 = result;
    operand2 = "";
    return result;
  }
  
  function type(input) {
    if (input.search(/[0123456789.]/) !== -1){
      return "digit";
    }
     else if (input === "=" || input === "CLEAR" || input==="±" || input==="√") {
      return input;
    }
     else {
      return "operator";
    }
}
