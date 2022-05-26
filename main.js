function calculateArea(ribA, ribB) {
  return ribA * ribB;
}

function isValidSquare(ribA, ribB, x, y) {
  return x + ribA <= 200 && y + ribB <= 150;
}

function displaySpanArea(value) {
  const areaSpan = document.querySelector("#Span");
  areaSpan.innerText = value;
}

function drawSquare(ribA, ribB, x, y) {
  const canvas = document.querySelector("canvas");
  const painter = canvas.getContext("2d");
  painter.fillStyle = "red";
  painter.fillRect(x, y, ribA, ribB);
}

function clearInputValues() {
  const inputs = document.querySelectorAll("input");

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
}

function getInputsValues() {
  const inputs = document.querySelectorAll("input");
  return {
    ribA: +inputs[0].value,
    ribB: +inputs[1].value,
    x: +inputs[2].value,
    y: +inputs[3].value,
  };
}

function calculateSquare() {
  const SquareValues = getInputsValues();
  if (
    isValidSquare(
      SquareValues.ribA,
      SquareValues.ribB,
      SquareValues.x,
      SquareValues.y
    )
  ) {
    const area = calculateArea(SquareValues.ribA, SquareValues.ribB);
    displaySpanArea(area);
    clearCanvas();
    drawSquare(
      SquareValues.ribA,
      SquareValues.ribB,
      SquareValues.x,
      SquareValues.y
    );
  } else {
    alert("Invalid values!");
  }
}

function clearCanvas() {
  const canvas = document.querySelector("canvas");
  const painter = canvas.getContext("2d");
  painter.clearRect(0, 0, 200, 150);
}

function reset() {
  clearInputValues();
  displaySpanArea("");
  clearCanvas();
  localStorage.clear();
}

function drawRandomRecOnWebLoad() {
  const canvas = document.querySelector("canvas");
  const painter = canvas.getContext("2d");
  painter.fillStyle = "red";

  x = Math.floor(Math.random() * 200);
  y = Math.floor(Math.random() * 150);
  ribA = Math.floor(Math.random() * 200);
  ribB = Math.floor(Math.random() * 150);
  painter.fillRect(x, y, ribA, ribB);
}

function drawRecInFewMoments() {
  setInterval(() => {
    clearCanvas();
    drawRandomRecOnWebLoad();
  }, 10000);
}

const form = document.querySelector("form");
form.onsubmit = onFormSubmit;

const resetBtn = document.querySelector("#resetBtn");
resetBtn.onclick = reset;

drawRandomRecOnWebLoad();
drawRecInFewMoments();

function onFormSubmit(event) {
  event.preventDefault();
  calculateSquare();
}
