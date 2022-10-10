"use strict";

//Selectors
const multiplicationResults = document.querySelector(".multiplication-results");
const multiplicationPattern = document.querySelector(".multiplication-pattern");
const powerResults = document.querySelector(".power-results");
const powerPattern = document.querySelector(".power-pattern");
const inputNumber = document.querySelector(".input--number");
const btn = document.querySelector(".btn");

let multiplicationResultsArr = [];
let multiplicationPatternArr = [];
let powerResultsArr = [];
let powerPatternArr = [];
let patternArr = [];

//Functions

// Calculate Multiples
const calcMultiples = function (num) {
  for (let i = 1; i < 10; i++) {
    multiplicationResultsArr.push(num * i);
  }

  //DOM and Console
  multiplicationPattern.textContent = `Multiplication Pattern: ${createPattern(
    multiplicationResultsArr
  )};`;
  multiplicationResults.textContent = `Multiplication Results: ${multiplicationResultsArr}`;
  multiplicationResultsArr = [];
  // return multiplicationResultsArr;
};

//Calculate Power
const calcPower = function (num) {
  for (let i = 1; i < 10; i++) {
    powerResultsArr.push(Math.pow(num, i));
  }

  //DOM and Console
  powerPattern.textContent = `Power Pattern: ${createPattern(powerResultsArr)}`;
  powerResults.textContent = `Power Results: ${powerResultsArr}`;
  powerResultsArr = [];
  // return powerResultsArr;
};

//Add digits until one digit

const addDigits = function (num) {
  let sum = 0;
  while (num > 0 || sum > 9) {
    if (num === 0) {
      num = sum;
      sum = 0;
    }
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

// Pattern
const createPattern = function (resultsArr) {
  let patternArr;
  patternArr = resultsArr.map((result) => addDigits(result));
  return patternArr;
};

// Display Everything
const display = function (num) {
  calcMultiples(num);
  calcPower(num);
};

// Event Listeners
btn.addEventListener("click", function () {
  display(inputNumber.value);
});
