import { createList } from "./createList";
import { dragDrop } from "./dragDrop";

const height = 35;
const listTitle = document.querySelector('.list_title');
const link = "https://dummyjson.com/products";
let loader = document.getElementById('loader');
let app = document.getElementById('app');
let product = {
    id: 1, 
    brand: "apple",
    title: "Samsung 9",
    price: 100,
    description: " ",
  };
let index = 0; 

export let productsArray = [];

export async function fetchData(numbersOfElemtnts) {
  let updateTitles = [];
  for(let i = 1; i <= numbersOfElemtnts; i++){
        const result = await fetch(`${link}/${i}`);
        const data = await result.json();

        const {
          id,
          brand,
          title,
          price,
          description,
        } = data;
    
        product = {
          ...product,
          id,
          brand,
          title,
          price,
          description,
        };     
        productsArray[i-1] = product;
        console.log(product);
      }

      // const listTitle = document.querySelector('.list_title');
      // let div = document.createElement('div');
      // for(let i = 1; i <= numbersOfElemtnts; i++) {
        
      //   div.className = 'title';
      //   div.innerHTML = `title`;
      //   listTitle.append(div);
      // }
      await create(numbersOfElemtnts, productsArray);
      await popupPanelka(productsArray, updateTitles);
      await searchProduct(productsArray);


  
    
      // for(let i = 1; i <= numbersOfElemtnts; i++) {
      //   div.innerHTML = `${productsArray[i].title}`;
      // }
      
      loader.style.display = 'none';
      app.style.display = 'block'

      
      dragDrop();
}




async function create(numbersOfElemtnts, productsArray) {
  for(let i = 0; i < numbersOfElemtnts; i++) {
    let div = document.createElement('div');
    div.className = 'title';
    div.innerHTML = `${productsArray[i].title}`;
    listTitle.append(div);
  }
}



async function searchProduct(productsArray) {
  let index = 0;
  let updateTitles = [];
  let flagMatch = 0;
  let titles = document.querySelectorAll('.title');
  const search = document.getElementById('search');
  const {description} = search.elements;
  for(let i = 0; i < titles.length; i++) {
    search.addEventListener('submit', event => {
      event.preventDefault();
      if(String(description.value) != String(productsArray[i].title) && String(description.value) != String(productsArray[i].brand)) {
        titles[i].remove();
        console.log(productsArray[i].title);
      }
      if(String(description.value) == String(productsArray[i].title) || String(description.value) == String(productsArray[i].brand)) {
        // index = i;
        // flagMatch++;
        updateTitles.push(i);
        console.log(updateTitles);
        popupPanelka(productsArray, updateTitles);
      }

    })
  }
  await popupPanelka(productsArray, updateTitles);

  
}




async function popupPanelka(productsArray, updateTitles) {
  let titles = document.querySelectorAll('.title');
  let popupWindow = document.querySelector('.pop-up-panel');


  if(updateTitles.length != 0){
    console.log("нужный путь");
    for(let i  = 0; i < updateTitles.length; i++){
      titles[i].addEventListener("mouseover", (event) => {
        if(event.type == 'mouseover') {
          popupWindow.style.display = 'block';
          popupWindow.style.marginTop = i*height+'px';
          popupWindow.innerHTML = `<div>Brand: ${productsArray[updateTitles[i]].brand}</div> <div>Title: ${productsArray[updateTitles[i]].title}</div> <div>Price: ${productsArray[updateTitles[i]].price}$</div> <div>${productsArray[updateTitles[i]].description}</div>`;
        }

      })

      titles[i].addEventListener("mouseout", (event) => {
        if(event.type == 'mouseout') {
            popupWindow.style.display = 'none'
        }
    })
    }
  }


  else{
    for(let i = 0; i < titles.length; i++) {
       
      titles[i].addEventListener("mouseover", (event) => {
          if(event.type == 'mouseover') {
  
              popupWindow.style.marginTop = i*height+'px';
              popupWindow.style.display = 'block'
              // if(updateTitles.length != 0){
              //   // i = 0; 
              //   for(let i  = 0; i < updateTitles.length; i++){
              //   popupWindow.style.marginTop = i*height+'px';
              //   popupWindow.innerHTML = `<div>Brand: ${productsArray[updateTitles[i]].brand}</div> <div>Title: ${productsArray[updateTitles[i]].title}</div> <div>Price: ${productsArray[updateTitles[i]].price}$</div> <div>${productsArray[updateTitles[i]].description}</div>`;
              //   }
                
              // }
              // else{
                popupWindow.innerHTML = `<div>Brand: ${productsArray[i].brand}</div> <div>Title: ${productsArray[i].title}</div> <div>Price: ${productsArray[i].price}$</div> <div>${productsArray[i].description}</div>`;
              // }
          }
      })
      titles[i].addEventListener("mouseout", (event) => {
          if(event.type == 'mouseout') {
              popupWindow.style.display = 'none'
          }
      })
    } 
  }

  
}
