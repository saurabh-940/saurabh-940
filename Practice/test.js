let string = "";
let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".result");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      string = eval(string);
      screen.value = string;
    } else if (e.target.innerText === "C") {
      string = "";
      screen.value = string;
    } else {
      string = string + e.target.innerText;
      screen.value = string;
    }
  });
});
