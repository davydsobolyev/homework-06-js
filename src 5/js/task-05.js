const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output")




input.addEventListener("input", (event) => {

    console.log(input.value);

    if(input.value == ""){
        output.textContentm = "Anonymous";
    }
    else{
        output.textContent = event.currentTarget.value;
        console.log(output.textContent)

    }
});