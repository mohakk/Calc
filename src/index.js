let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#input-box").value = string;
    } else if (e.target.innerHTML == "Clear") {
      string = "";
      document.getElementById("input-box").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("input-box").value = string;
    }
  });
});
