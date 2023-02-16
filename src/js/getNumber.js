import { createList } from "./createList";
import { dragDrop } from "./dragDrop";
import { fetchData } from "./fethcData";
import { popupPanel } from "./popupPanel";


const listTitle = document.querySelector('.list_title');
const loader = document.querySelector('#loader');

export function getNumber(numbersOfElemtnts){
    const form = document.getElementById('form');
    const {description} = form.elements;
    if(description.value != numbersOfElemtnts && description.value != undefined) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const todoEl = description.value;
        console.log(todoEl);
        form.reset();
        listTitle.innerHTML='';
        Loader(todoEl);
        // createList(todoEl);
        // dragDrop();
        // fetchData(todoEl);
      });
    }
    Loader(numbersOfElemtnts);
    // createList(numbersOfElemtnts);
    // dragDrop();
    // fetchData(numbersOfElemtnts)
  }
  

async function Loader(numbersOfElemtnts) {

  loaderApp();
    // popupPanel();
  await fetchData(numbersOfElemtnts);

}
  
function loaderApp() {
  let loader = document.getElementById('loader');
  let app = document.getElementById('app');
  app.style.display = 'none';
  loader.style.display = 'block';
}

