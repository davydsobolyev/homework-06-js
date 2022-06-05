const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");



input.addEventListener("input", (event) =>{

    console.log(input.value)

    span.style.fontSize = input.value;
})