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

    // gemäss airbnb style guide für getter/setter
    setOperand(newOperand){
        this.operand = newOperand;
    }

    getOperand(){
        return this.operand;
    }

    setNumber1(newNumber1){
        this.number1 = newNumber1;
    }

    getNumber1() {
        return this.number1;
    }

    setNumber2(newNumber2){
        this.number2 = newNumber2;
    }

    getNumber2() {
        return this.number2;
    }

    swap(newNumber) {
        if(this.number1 == undefined){
            this.number1 = newNumber;
        }
    }

    clearVar() {
        this.number1 = undefined;
        this.number2 = undefined;
        this.operand = undefined;
    }

    calculate(){

        switch (this.operand) {
            case "+":
                console.log("+");
                return Number(this.number1) + Number(this.number2);
            case "-":
                console.log("-");
                return Number(this.number1) - Number(this.number2);
            case "/":
                console.log("/");
                return Number(this.number1) / Number(this.number2);
            case "*":
                return Number(this.number1) * Number(this.number2);
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

    calculator.clearVar();
}

function operator(event) {
    let output = document.getElementById("output");

    calculator.setOperand(event.target.value);
    calculator.swap(calculator.getNumber2());

    output.value = calculator.getNumber1() + " " + calculator.getOperand();
    document.getElementById("input").innerHTML = "";

}

function runCalc(){
    document.getElementById("output").innerHTML = "";
    calculator.setNumber1(document.getElementById("input").innerHTML = calculator.calculate());

}

function number(event) {
    let number = document.getElementById("input");
    calculator.setNumber2(number.value += event.target.value);
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