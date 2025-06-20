export function applyColor(square, currentColor, type) {
  const existingColor = square.style.backgroundColor;
  const currentOpacity = parseFloat(square.dataset.opacity || "0");

  if (!existingColor) {
    square.style.backgroundColor = currentColor;
    square.dataset.opacity = "0.1";
    square.style.opacity = "0.1";
    return;
  }

  if (type === "mouseover") {
    if (existingColor === currentColor) {
      if (currentOpacity < 1) {
        const newOpacity = Math.min(currentOpacity + 0.1, 1);
        square.dataset.opacity = newOpacity.toFixed(1);
        square.style.opacity = newOpacity.toFixed(1);
      }
    } else {
      square.style.backgroundColor = currentColor;
      square.dataset.opacity = "0.1";
      square.style.opacity = "0.1";
    }
    return;
  }

  square.style.backgroundColor = currentColor;
  square.dataset.opacity = "0.1";
  square.style.opacity = "0.1";
}
