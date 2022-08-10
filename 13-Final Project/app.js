/*let buttons = document.querySelectorAll("#grocery-list li .delete");
console.log(buttons);

// Iterar todos os botões adicionando event listeners
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const LI = e.target.parentElement;
    // Forma antiga de usar o removeChild()
    LI.parentElement.removeChild(LI);
  });
}); */

// **** PROCURANDO ITENS *****
const SEARCH = document.forms["search-item"].querySelector("input");

// add event listener
SEARCH.addEventListener("keyup", (e) => {
  // pega o texto do usuário
  let text = e.target.value.toLowerCase();
  // pegar todas as tags li
  let groceryList = document.querySelector("#grocery-list ul");
  let groceries = groceryList.getElementsByTagName("li");

  // converte o groceries que é um HTMLCollection em um array
  let groceriesArray = Array.from(groceries);

  // iterar em cada item
  groceriesArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    let groceryNameLower = groceryName.toLowerCase();

    // indexOf pra ver se nosso texto é encontrado na lista
    if (groceryNameLower.indexOf(text) == -1) {
      grocery.style.display = "none";
    } else {
      grocery.style.display = "block";
    }
  });
});

// **** ESCONDENDO ITENS *****
let checkbox = document.querySelector("#hide");
checkbox.addEventListener("change", (e) => {
  let groceryList = document.getElementById("grocery-list");
  if (checkbox.checked) {
    groceryList.style.display = "none";
  } else {
    groceryList.style.display = "block";
  }
});

// **** ADICIONANDO ITENS *****
let formAdd = document.getElementById("add-item");
// adiciona um eventListener
formAdd.addEventListener("submit", (e) => {
  let ul = document.getElementsByTagName("ul")[0];
  e.preventDefault();
  // pegar o texto digitado
  let text = formAdd.querySelector('input[type="text"]').value;

  // apagando o input
  formAdd.querySelector('input[type="text"]').value = "";

  // creating the list items dynamically
  let li = document.createElement("li");
  let groceryName = document.createElement("span");
  let deleteButton = document.createElement("span");

  // as tags spans são aninhadas dentro do elemento li
  li.appendChild(groceryName);
  li.appendChild(deleteButton);

  // adicionando nosso elemento criado ao DOM
  ul.appendChild(li);

  // adicionando o texto
  groceryName.textContent = text;
  deleteButton.textContent = "delete";

  // adicionando classes
  groceryName.classList.add("name");
  deleteButton.classList.add("delete");
});

// *********** Deletando itens usando event bubbling e delegation ***********
let groceryListUL = document.querySelector("#grocery-list ul");
// adicionando um eventListener
groceryListUL.addEventListener("click", remove);
// definindo o handler
function remove(e) {
  let target = e.target;
  if (target.className == "delete") {
    let li = target.parentElement;
    li.remove();
  }
}

// ########## TABS ###########

let headings = document.querySelector(".heading");
let panels = document.querySelectorAll(".panel");

let selectedPanel = null;

// usando o event bubbling
headings.addEventListener("click", (e) => {
  // qual LI disparou o evento?
  let target = e.target;
  // usando o dataset pra recuperar o valor -> 'clicked'
  let dataAttribute = e.target.dataset.clicked;

  if (target.tagName == "LI") {
    // remova o elemento selecionado
    if (selectedPanel != null) {
      selectedPanel.classList.toggle("selected");
    }
    selectedPanel = target;
    selectedPanel.classList.toggle("selected");

    // mostrar o painel correto
    let targetPanel = document.querySelector(dataAttribute);
    // determinar se o painel selcionado é o mesmo que está ativo
    // podemos usar o forEach porque o querySelectorAll retorna uma NodeList
    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});

// botão mostra resposta

let answerButton = document.getElementById("show-answer");
answerButton.addEventListener("click", answer);

function answer() {
  document.getElementById("answer").classList.add("show");
  document.getElementById("answer").textContent = "O SPAguete";
  answerButton.style.display = "none";
}
