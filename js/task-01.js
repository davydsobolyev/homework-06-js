const items = document.querySelectorAll(".item")

console.log("Number of categories:",items.length)

items.forEach((item) => {

    let h2 = item.querySelector("h2");
    console.log("Category:",h2.textContent);
    console.log("Elements;",item.querySelectorAll("li").length)

});