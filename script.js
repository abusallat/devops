function changeColor() {
  const colors = ["#f44336", "#2196f3", "#4caf50", "#ffeb3b", "#9c27b0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
