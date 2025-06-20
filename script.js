const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

const SIZE = 16;

function createGrid(size) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const totalSquares = size * size;
  const squareSize = 100 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    square.addEventListener("mouseenter", () => {
      square.classList.add("colored");
    });
    fragment.appendChild(square);
  }

  container.appendChild(fragment);
}

createGrid(SIZE);
