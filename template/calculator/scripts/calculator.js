'use strict';

/**
* core
*/
class Calculator {
    constructor(_number1, _number2, _operand) {
        this.number1 = _number1;
        this.number2 = _number2;
        this.operand = _operand;
    }

    set retOperand(newOperand){
        this.operand = newOperand;

    }

    set retNumber1(newNumber1){
        this.number1 = newNumber1;
    }

    get retOperand(){
        return this.operand;
    }

    get retNumber1() {
        return this.number1;
    }

    calculate(number1,n2){

        var n1 = number1.split(" ");

        switch (this.operand) {
            case "+":
                console.log("+");
                return parseInt(n1) + parseInt(n2);
            case "-":
                console.log("-");
                return parseInt(n1) - parseInt(n2);
            case "/":
                console.log("/");
                return parseInt(n1) / parseInt(n2);
            case "*":
                return parseInt(n1) * parseInt(n2);
            default:
                console.log("unknown operation");
                break;
        }

    }
}

/**
 * UI
 */
const calculator = new Calculator();

function clear() {
    document.getElementById("input").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    console.log(calculator.retNumber1);
}

function operator(event) {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    calculator.retOperand = event.target.value;

    output.value = input.value + " " + calculator.retOperand;
    document.getElementById("input").innerHTML = "";

}

function runCalc(){
    let number1 = document.getElementById("output").value;
    let number2 = document.getElementById("input").value;

    clear();
    calculator.retNumber1 = document.getElementById("input").innerHTML = calculator.calculate(number1, number2);

}

function number(event) {
    let number = document.getElementById("input");
    number.value += event.target.value;
}


window.addEventListener('DOMContentLoaded', function() {

    document.getElementById("output").innerHTML = "Welcome!";

    document.getElementById("key-c").addEventListener("click", clear);
    document.getElementById("key-=").addEventListener("click", runCalc);


    for (var i = 0; i < document.getElementsByClassName("number").length; i++) {
        document.getElementsByClassName("number")[i].addEventListener("click", number);
    }

    for (i = 0; i < document.getElementsByClassName("operator").length; i++){
        document.getElementsByClassName("operator")[i].addEventListener("click", operator);
    }

});


/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
console.log(""/*TODO*/, "should be", 17);
console.log(""/*TODO*/, "should be", 15);
console.log(""/*TODO*/, "should be", 30);
console.log(""/*TODO*/, "should be", true); // true = hasError