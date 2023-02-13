import { createList } from "./createList";
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
        createList(todoEl);
        Loader(todoEl);
        // fetchData(todoEl);
      });
    }
    createList(numbersOfElemtnts);
    Loader(numbersOfElemtnts);
    // fetchData(numbersOfElemtnts)
  }
  

  async function Loader(numbersOfElemtnts) {
    popupPanel();
    await fetchData(numbersOfElemtnts);
  }
  