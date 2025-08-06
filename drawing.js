export function applyColor(square, currentMode) {
  switch (currentMode) {
    case "erase":
      square.style.backgroundColor = "";
      square.style.opacity = "";
      delete square.dataset.opacity;
      break;

    case "draw":
      const previousOpacity = parseFloat(square.dataset.opacity || "0");
      const newOpacity = Math.min(previousOpacity + 0.2, 1);

      square.style.backgroundColor = "black";
      square.dataset.opacity = newOpacity.toFixed(1);
      square.style.opacity = newOpacity.toFixed(1);
      break;

    default:
      console.warn(`Unknown mode: ${currentMode}`);
  }
}
