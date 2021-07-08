let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "+":
        if (display.innerText) {
        }
      default:
        display.innerText += e.target.innerText;
    }
  });
});

var clickSound = new Audio();
clickSound.src = "sounds/click-sound.mp3";

function loadContent(num) {
  clickSound.play();
}

var clickSound2 = new Audio();
clickSound2.src = "sounds/click-sound2.mp3";

function loadContent2(num) {
  clickSound2.play();
}
