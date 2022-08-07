// step 1 grab the button
let button = document.getElementById("button");

// setp2 add event listener
button.addEventListener("click", onButtonClick);

function onButtonClick() {
  let messageDiv = document.getElementById("message");
  let name = document.getElementById("name").value;
  let animal = document.getElementById("animal").value;

  messageDiv.textContent = `Hi ${name}, you animal is ${animal}.`;
}
