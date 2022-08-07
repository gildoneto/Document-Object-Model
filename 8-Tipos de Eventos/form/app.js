// pegar o elemento output <p>
let output = document.getElementById("output");

// pegar o input textbox
let nameText = document.querySelector('input[type="text"]');

document.querySelector("form").addEventListener("submit", (e) => {
  output.textContent = `O evento de submit foi efetuado às ${e.timeStamp}`;
  e.preventDefault();
});

// vamos dar uma olhada em outros tipos de eventos
nameText.addEventListener("input", () => {
  output.textContent = `O valor digitado é ${nameText.value}`;
});

nameText.addEventListener("focus", (e) => {
  e.target.style.background = "lightblue";
  e.target.style.color = "black";
});

nameText.addEventListener("copy", () => {
  alert(`Você copiou o texto: "${nameText.value}"`);
});
