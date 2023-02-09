const height = 31;
let titles = document.querySelectorAll('.title');
let popupWindow = document.querySelector('.pop-up-panel');



for(let i = 0; i < titles.length; i++) {


    titles[i].addEventListener("mouseover", (event) => {
        if(event.type == 'mouseover') {
            console.log('mouseon');
            console.log(i);
            popupWindow.style.marginTop = i*height+'px';
            popupWindow.style.display = 'block'
        }
    })
    titles[i].addEventListener("mouseout", (event) => {
        if(event.type == 'mouseout') {
            console.log('mouseoff');
            popupWindow.style.display = 'none'
        }
    })

}

const tasksListElement = document.querySelector(`.list_title`);
const taskElements = tasksListElement.querySelectorAll(`.title`);

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`title`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }
		
	tasksListElement.insertBefore(activeElement, nextElement);


    
    let titles = document.querySelectorAll('.title');
    let popupWindow = document.querySelector('.pop-up-panel');
    for(let i = 0; i < titles.length; i++) {


        titles[i].addEventListener("mouseover", (event) => {
            if(event.type == 'mouseover') {
                console.log('mouseon');
                console.log(i);
                popupWindow.style.marginTop = i*height+'px';
                popupWindow.style.display = 'block'
            }
        })
        titles[i].addEventListener("mouseout", (event) => {
            if(event.type == 'mouseout') {
                console.log('mouseoff');
                popupWindow.style.display = 'none'
            }
        })
    
    }
    
});
