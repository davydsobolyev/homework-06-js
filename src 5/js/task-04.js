let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');


decrement.addEventListener('click',(counterValue) => {

    console.log("me",counterValue)
    
    counterValue = counterValue - 1;
    console.log(counterValue)
    const element = document.querySelector("#value");

    element.textContent = counterValue;


})

increment.addEventListener('click',() => {
 counterValue += 1;
 console.log(counterValue);
 const element = document.querySelector("#value");

 element.textContent = counterValue;

})

while (true){
    console.log(counterValue)

}