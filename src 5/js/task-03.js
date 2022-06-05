const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list1 = images.map(element => `<li> <img src="${element.url}" alt ="${element.alt}" /> </li>`).join('')

console.log(list1)

// const list2 = images.map(element =>{

//   const img = document.createElement("img");
//   img.src = element.url;
//   img.alt = element.alt;

//   const li = document.createElement("li");

//   li.append(img)

//   console.log(li)

//   return li;
// })()

const gallery = document.querySelector(".gallery");



console.log(gallery)
gallery.insertAdjacentHTML("beforeend",list1);

