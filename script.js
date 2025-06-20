const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

const SIZE = 100;

function enableColorOnHover(container) {
  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
      e.target.classList.add("colored");
    }
  });
}

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
    fragment.appendChild(square);
  }

  container.appendChild(fragment);
}

enableColorOnHover(container);
createGrid(SIZE);
