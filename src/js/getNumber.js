import { createList } from "./createList";

const listTitle = document.querySelector('.list_title');

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
      });
    }
    createList(numbersOfElemtnts);
  }
  