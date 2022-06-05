const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const new1 = ingredients.map( element => {
  const htmlElement = document.createElement("li")
  htmlElement.textContent = element;
  htmlElement.classList = "item";
  
  return htmlElement;
})

const list = document.querySelector("#ingredients")

list.append(...new1)