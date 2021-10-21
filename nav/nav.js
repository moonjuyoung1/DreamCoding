const button = document.querySelector(".hidden");
const button1 = document.querySelectorAll(".navbutton");
const button2 = document.querySelector(".right");
button.addEventListener("click", () => {
  for (let i = 0; i < button1.length; i++) {
    button1[i].classList.toggle("active");
    console.log("class", button1[i].classList);
  }

  button2.classList.toggle("active");
});
