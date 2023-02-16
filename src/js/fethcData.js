import { dragDrop } from "./dragDrop";

const height = 35; //  Высота элемента в списке
const listTitle = document.querySelector('.list_title');
const link = "https://dummyjson.com/products";
let loader = document.getElementById('loader');
let app = document.getElementById('app');
let product = {  // Шаблон объекта продукта
    id: 1, 
    brand: "apple",
    title: "Samsung 9",
    price: 100,
    description: " ",
  };
 

export let productsArray = []; // Массив объектов

export async function fetchData(numbersOfElemtnts) {
  let updateTitles = []; // Массив объктов после использования поиска
  
  for(let i = 1; i <= numbersOfElemtnts; i++){  // Получение данных
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

      
      await create(numbersOfElemtnts, productsArray); // Отрисовка списка
      await popupPanelka(productsArray, updateTitles); // Отрисовка всплывающей панельки
      await searchProduct(productsArray); // Поиск по бренду или названию
      
      loader.style.display = 'none';
      app.style.display = 'block'
    
      dragDrop(); // Функция для перетаскивания элементов списка
}



// Отрисовка списка
async function create(numbersOfElemtnts, productsArray) {
  for(let i = 0; i < numbersOfElemtnts; i++) {
    let div = document.createElement('div');
    div.className = 'title';
    div.innerHTML = `${productsArray[i].title}`;
    listTitle.append(div);
  }
}



async function searchProduct(productsArray) {
  let updateTitles = []; // Массив объктов после использования поиска
  let titles = document.querySelectorAll('.title');
  const search = document.getElementById('search');
  const {description} = search.elements;
  for(let i = 0; i < titles.length; i++) {
    search.addEventListener('submit', event => {
      event.preventDefault();
      if(String(description.value) != String(productsArray[i].title) && String(description.value) != String(productsArray[i].brand)) {
        titles[i].remove(); // Удаление не соответсвующих элементов
      }
      if(String(description.value) == String(productsArray[i].title) || String(description.value) == String(productsArray[i].brand)) {
        updateTitles.push(i); // Получение номеров соответствующих элементов
        popupPanelka(productsArray, updateTitles); // Отрисовка всплывающей панельки
      }

    })
  }
  await popupPanelka(productsArray, updateTitles); // Отрисовка всплывающей панельки

  
}




async function popupPanelka(productsArray, updateTitles) {
  let titles = document.querySelectorAll('.title');
  let popupWindow = document.querySelector('.pop-up-panel');


  if(updateTitles.length != 0){  // Ветвь для панельки после поиска
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

  else{ // Ветвь для элементов по умолчанию
    for(let i = 0; i < titles.length; i++) {
       
      titles[i].addEventListener("mouseover", (event) => {
          if(event.type == 'mouseover') {
              popupWindow.style.marginTop = i*height+'px';
              popupWindow.style.display = 'block'
              popupWindow.innerHTML = `<div>Brand: ${productsArray[i].brand}</div> <div>Title: ${productsArray[i].title}</div> <div>Price: ${productsArray[i].price}$</div> <div>${productsArray[i].description}</div>`;
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
