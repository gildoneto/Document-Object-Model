let ding = document.querySelector("audio");
let title = document.getElementById("title");
let para1 = document.getElementById("first-paragraph");
let para2 = document.getElementById("second-paragraph");

function changeColorTo(color) {
  title.setAttribute("style", `color: ${color}`);
  para1.setAttribute("style", `color: ${color}`);
  para2.setAttribute("style", `color: ${color}`);
  ding.play();
}
