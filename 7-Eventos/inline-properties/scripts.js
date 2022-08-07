// step 1: pegar o elemento div e o botão
let content = document.getElementById("content");
let button = document.getElementById("show-more");

// step 2: adicionar nosso event listener via inline property
button.onclick = () => {
  if (content.className == "") {
    // expandir o box
    content.className = "open";
    button.innerHTML = "Collapse now";
  } else {
    // collapse the box
    content.className = "";
    button.innerHTML = "Expand";
  }
};
