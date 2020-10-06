// Absolute Global Variables

var num1Display = document.getElementById("num1");
var num2Display = document.getElementById("num2");
var operatorDisplay = document.getElementById("operator");
var usersAnswerDisplay = document.getElementById("answer");
var timetakenDisplay = document.getElementById("timeTaken");
var timeDisplay = document.getElementById("time");
var cw = document.getElementById("cw");

// Relative Global Variables

var num1, num2, operator, time, timeCount, timeTaken, result, randomInt, randomOperator, usersAnswer, a, b;
var operatorArray = ["+","-","x","/"];

// Number Generating Functions

function randomNums() {
    if(operatorArray[randomOperator] === "+") {
        randomInt = Math.floor(Math.random() * 30);
        num1 = randomInt;
        num1Display.innerHTML = "<h2>" + num1 + "</h2>";
        randomInt = Math.floor(Math.random() * 30);
        num2 = randomInt;
        num2Display.innerHTML = "<h2>" + num2 + "</h2>";
        result = num1 + num2;
    } else if (operatorArray[randomOperator] === "-") {
        randomInt = Math.floor(Math.random() * 30);
        num1 = randomInt;
        num1Display.innerHTML = "<h2>" + num1 + "</h2>";
        randomInt = Math.floor(Math.random() * 30);
        num2 = randomInt;
        num2Display.innerHTML = "<h2>" + num2 + "</h2>";
        result = num1 - num2;
    } else if(operatorArray[randomOperator] === "x") {
        randomInt = Math.floor(Math.random() * 10);
        num1 = randomInt;
        num1Display.innerHTML = "<h2>" + num1 + "</h2>";
        randomInt = Math.floor(Math.random() * 10);
        num2 = randomInt;
        num2Display.innerHTML = "<h2>" + num2 + "</h2>";
        result = num1 * num2;
    } else if(operatorArray[randomOperator] === "/") {
        randomInt = 2 * Math.floor(Math.random() * 20);
        num1 = randomInt;
        num1Display.innerHTML = "<h2>" + num1 + "</h2>";
        num2 = 2;
        num2Display.innerHTML = "<h2>" + num2 + "</h2>";
        result = num1 / num2;
    }
}

// Time Functions

function timeGenerator() {
    if(operatorArray[randomOperator] === "+") {
        time = 10000;
        timeCount = 10;
        timeTaken = 0;
        timetakenDisplay.innerHTML = "<h2>" + timeTaken + "<br> seconds" + "</h2>";
        timeDisplay.innerHTML = "<h2>" + timeCount + "<br> seconds" + "</h2>";
    } else if (operatorArray[randomOperator] === "-") {
        time = 10000;
        timeCount = 10;
        timeTaken = 0;
        timetakenDisplay.innerHTML = "<h2>" + timeTaken + "<br> seconds" + "</h2>";
        timeDisplay.innerHTML = "<h2>" + timeCount + "<br> seconds" + "</h2>";
    } else if(operatorArray[randomOperator] === "x") {
        time = 10000;
        timeCount = 10;
        timeTaken = 0;
        timetakenDisplay.innerHTML = "<h2>" + timeTaken + "<br> seconds" + "</h2>";
        timeDisplay.innerHTML = "<h2>" + timeCount + "<br> seconds" + "</h2>";
    } else if(operatorArray[randomOperator] === "/") {
        time = 10000;
        timeCount = 10;
        timeTaken = 0;
        timetakenDisplay.innerHTML = "<h2>" + timeTaken + "<br> seconds" + "</h2>";
        timeDisplay.innerHTML = "<h2>" + timeCount + "<br> seconds" + "</h2>";
    }
}

// Random Operator Function

function randomOp() {
    randomOperator = Math.floor(Math.random() * operatorArray.length);
    operatorDisplay.innerHTML = operatorArray[randomOperator];
}

// Answer Function 

function answer() {
    usersAnswer = parseInt(usersAnswerDisplay.value);
    if(usersAnswer == result) {
        clearTimeout(a);
        clearInterval(b);
        cw.innerHTML = "<h2>" + "CORRECT" + "</h2>"
        document.body.style.backgroundColor = "green";
        setTimeout(function() {
            document.body.style.backgroundColor = "white";
        },200);
    } else{
        cw.innerHTML = "<h2>" + "WRONG" + "</h2>";
        document.body.style.backgroundColor = "red";
        setTimeout(function() {
            document.body.style.backgroundColor = "white";
        },200);
        clearTimeout(a);
        clearInterval(b);
    }
}

// Calling the functions

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 9) {
        randomOp();
        randomNums();
        timeGenerator();
        a = setTimeout(function() {
            alert("Time is up!");
        }, time);
        b = setInterval(function() {
            timeCount--;
            timeTaken++;
            timetakenDisplay.innerHTML = "<h2>" + timeTaken + "<br> seconds" + "</h2>";
            timeDisplay.innerHTML = "<h2>" + timeCount + "<br> seconds" + "</h2>";
        },1000);
        cw.innerHTML = "";
    } else if(event.keyCode === 13) {
        answer();
    }
});