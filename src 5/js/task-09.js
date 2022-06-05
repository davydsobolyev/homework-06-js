function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const button = document.querySelector(".change-color")
const span = document.querySelector(".color")


button.addEventListener("click", (event) => {

  const body = document.querySelector("body")


  body.style.backgroundColor = getRandomHexColor();

  span.textContent = body.style.backgroundColor;


})