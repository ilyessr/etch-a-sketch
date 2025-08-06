import { applyColor } from "./drawing.js";

const container = document.querySelector(".container");
const input = document.querySelector("#grid-size");
const resetButton = document.querySelector("#reset");
const size = parseInt(input.value);
let currentMode = "draw";
const toggleButton = document.querySelector("#mode-toggle");

function setMode(mode) {
  currentMode = mode;

  container.classList.toggle("drawing", mode === "draw");
  container.classList.toggle("erasing", mode === "erase");

  toggleButton.innerHTML =
    mode === "erase"
      ? `<img src="svg/pen.svg" alt="Draw icon" width="16" height="16" /> <span>Draw</span>`
      : `<img src="svg/rubber.svg" alt="Eraser icon" width="16" height="16" /> <span>Eraser</span>`;
}

function setupEraserToggle() {
  toggleButton.addEventListener("click", () => {
    const newMode = currentMode === "draw" ? "erase" : "draw";

    setMode(newMode);
  });
}

function enableDrawing(container) {
  let isDrawing = false;

  container.addEventListener("mousedown", (e) => {
    if (e.button === 0 && e.target.classList.contains("square")) {
      applyColor(e.target, currentMode);
      isDrawing = true;
    }
  });

  document.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  container.addEventListener("mouseover", (e) => {
    if (isDrawing && e.target.classList.contains("square")) {
      applyColor(e.target, currentMode);
    }
  });
}

function resetGrid() {
  const newSize = parseInt(input.value);
  if (!isNaN(newSize) && newSize >= 10 && newSize <= 100) {
    createGrid(newSize);
    setMode("draw");
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
setMode("draw");
setupEraserToggle();
