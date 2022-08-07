// pegar o elemento output <p>
let output = document.getElementById("output");

document.querySelector("form").addEventListener("submit", (e) => {
  output.textContent = `O evento de submit foi efetuado às ${e.timeStamp}`;
  e.preventDefault();
});
