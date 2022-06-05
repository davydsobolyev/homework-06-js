





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divs = document.querySelector("#boxes")

function createBoxes(amount){


 console.log(divs)

  let height = 30;
  let width = 30;

  for(let i = 0; i < amount ; i +=1){

    const div = document.createElement("div")

    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = getRandomHexColor();



    divs.append(div)

    height += 10;
    width += 10;


  }

}

function destroyall(){


  divs.remove("div")


}



const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');




const input = document.querySelector("input")
 
create.addEventListener("click", (event) => {

  const number = input.value;

  createBoxes(number);



 
})

destroy.addEventListener("click", destroyall)

