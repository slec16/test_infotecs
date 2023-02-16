import { dragDrop } from "./dragDrop";
import { popupPanel } from "./popupPanel";


const listTitle = document.querySelector('.list_title');

export function createList(numbersOfElemtnts) {
    // console.log(numbersOfElemtnts);
    for(let i = 1; i <= numbersOfElemtnts; i++) {
      let div = document.createElement('div');
      div.className = 'title';
      // div.innerHTML = 'title_'+i;
      listTitle.append(div);
    }
    // popupPanel();
    dragDrop();
  }