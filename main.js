import { applyColor } from "./drawing.js";
import { getRandomRGB } from "./utils.js";

const container = document.querySelector(".container");
const input = document.querySelector("#grid-size");
const resetButton = document.querySelector("#reset");
let currentColor = "black";
const size = parseInt(input.value);

function enableDrawing(container) {
  let isDrawing = false;

  container.addEventListener("mousedown", (e) => {
    if (e.button === 0 && e.target.classList.contains("square")) {
      currentColor = getRandomRGB();
      applyColor(e.target, currentColor, e.type);
      isDrawing = true;
    }
  });

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
      applyColor(e.target, currentColor, e.type);
    }
  });
}

function resetGrid() {
  const newSize = parseInt(input.value);
  if (!isNaN(newSize) && newSize >= 10 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 10 and 100.");
  }
}

function createGrid(size) {
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const totalSquares = size * size;
  const squareSize = 100 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    fragment.appendChild(square);
  }

  container.appendChild(fragment);
}

resetButton.addEventListener("click", resetGrid);
input.addEventListener("change", resetGrid);
enableDrawing(container);
createGrid(size);
