// step 1: adiciona texto dinamicamente na div
document.getElementById("note").textContent = "This is pure DOM manipulation";

// step 2: Mudando o background color do círculo com um evento de click
let circle = document.getElementById("circle");
circle.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  randomColor = randomColor.padStart(6, "0");
  circle.style.backgroundColor = `#${randomColor}`;
}
