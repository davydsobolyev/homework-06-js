const items = document.querySelectorAll(".item")

console.log("Number of categories:",items.length)

for(const item of items){

    let me = item.querySelector("h2");
    console.log("Category:",me.textContent);
    console.log("Elements;",item.querySelectorAll("li").length)

}