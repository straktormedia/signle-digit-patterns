const settings = {
  dimensions: [1980, 540],
  //   animate: true,
};

////////////////////////////////
("use strict");

//Selectors
const multiplicationResults = document.querySelector(".multiplication-results");
const multiplicationPattern = document.querySelector(".multiplication-pattern");
const powerResults = document.querySelector(".power-results");
const powerPattern = document.querySelector(".power-pattern");

const inputNumber = document.querySelector(".input--number");
const btn = document.querySelector(".btn");
const btnViewCircles = document.querySelector(".view-circles");

let multiplicationResultsArr = [];
let powerResultsArr = [];

//Functions

// Calculate Multiples
const calcMultiples = function (num) {
  for (let i = 1; i < 10; i++) {
    multiplicationResultsArr.push(num * i);
  }
  //DOM and Console
  console.log(
    `Multiplication Pattern: ${createPattern(multiplicationResultsArr)}`
  );
  multiplicationPattern.textContent = `Multiplication Pattern: ${createPattern(
    multiplicationResultsArr
  )}`;
  multiplicationResults.textContent = `Multiplication Results: ${multiplicationResultsArr}`;

  return createPattern(multiplicationResultsArr);
};

//Calculate Power
const calcPower = function (num) {
  for (let i = 1; i < 10; i++) {
    powerResultsArr.push(Math.pow(num, i));
  }
  //DOM and Console
  console.log(`Power Pattern: ${createPattern(powerResultsArr)}`);
  powerPattern.textContent = `Power Pattern: ${createPattern(powerResultsArr)}`;
  powerResults.textContent = `Power Results: ${powerResultsArr}`;

  return createPattern(powerResultsArr);
};

// Add Digits
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

// Create Pattern
const createPattern = function (resultsArr) {
  let patternArr;
  patternArr = resultsArr.map((result) => addDigits(result));
  return patternArr;
};

/////////////////////////////

// 'canvas-sketch' Library
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = 3;

    // const iw = width / 100;
    let h = height / 15;
    const gap = width / 9;
    // const ix = width / 100;
    // const iy = height / 5;

    let x, y, w, radius;

    // Choose number

    const drawPatterns = function (num) {
      const patternMultiples = calcMultiples(num);
      const patternPower = calcPower(num);

      patternMultiples.forEach((el, i) => {
        x = gap * i;
        y = h + 60;
        w = h = el * 10;

        radius = el * 9;

        // Draw Circles
        context.save();
        context.beginPath();
        context.arc(x + radius, y, radius, 0, Math.PI * 2);
        context.stroke();
        context.restore();

        // Draw Rectangles
        // context.save();
        // context.beginPath();
        // context.rect(x, y, w, h);
        // context.stroke();
        // context.restore();
      });

      patternPower.forEach((el, i) => {
        x = gap * i;
        y = h + 270;
        w = el * 10;
        radius = el * 9;

        // Draw Circles
        context.beginPath();
        context.arc(x + radius, y, radius, 0, Math.PI * 2);
        context.stroke();

        // Draw Rectangles
        // context.beginPath();
        // context.rect(x, y, w, h);
        // context.stroke();
      });
    };

    // drawPatterns(9);

    btn.addEventListener("click", function () {
      console.log(inputNumber.value);
      //   console.log(drawPatterns);

      //DOM and Console

      // Update Results
      multiplicationResultsArr = [];
      powerResultsArr = [];

      drawPatterns(inputNumber.value);
    });

    // drawPatterns(44);
  };
};

canvasSketch(sketch, settings);

//////////////////////
// Without canvas sketch

btnViewCircles.addEventListener("click", function () {
  document.querySelector("body > canvas").style.display = "flex";
});
