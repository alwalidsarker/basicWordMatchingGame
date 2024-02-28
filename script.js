let randomWords = ["random", "word", "pizza", "nothing"];
function randomize() {
  return randomWords.sort(function (a, b) {
    return 0.6 - Math.random();
  });
}
let clutter = "";
function mainFunc() {
  let input = document.querySelector("input");
  let form = document.querySelector("form");
  let button = document.querySelector("#mainbtn");
  let heading = document.querySelector("h3");
  let mainRes = randomize();
  let wordWrapper = document.getElementById("words");
  let againRandomize = mainRes[Math.floor(Math.random() * 4)];
  let displayRandomize = Array.from(againRandomize).sort(function (a, b) {
    return 0.5 - Math.random();
  });
  Array.from(displayRandomize).forEach(function (word) {
    let span = `<span>${word}</span>`;
    clutter += span;
  });
  wordWrapper.innerHTML = clutter;
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value === againRandomize) {
      heading.textContent = "right";
    } else {
      heading.textContent = "wrong";
      heading.style.backgroundColor = "red";
      heading.style.color = "#fff";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  mainFunc();
});
document.querySelector("#reset").addEventListener("click", function () {
  mainFunc();
});
