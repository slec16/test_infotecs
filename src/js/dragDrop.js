const height = 35; //  Высота элемента в списке



export function dragDrop(){

    const tasksListElement = document.querySelector(`.list_title`);
    const taskElements = tasksListElement.querySelectorAll(`.title`);
    for (const task of taskElements) { // Включаем возможность перемещения
        task.draggable = true;
    }
    tasksListElement.addEventListener(`dragstart`, (event) => {
    event.target.classList.add(`selected`);
    });

    tasksListElement.addEventListener(`dragend`, (event) => {
        event.target.classList.remove(`selected`);
    });

    const getNextElement = (cursorPosition, currentElement) => { // получение элемента на место которого вставляем
    const currentElementCoord = currentElement.getBoundingClientRect(); // Вертикальная координата центра элемента
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    
    const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
    
    return nextElement;
    };

    tasksListElement.addEventListener(`dragover`, (event) => { // Отслеживаем перемещение
        event.preventDefault();
    
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = event.target;
    const isMoveable = activeElement !== currentElement && //Проверим, что dragover не на выбранном элементе и находится в списке элментов
        currentElement.classList.contains(`title`);
        
    if (!isMoveable) {
        return;
    }
    
    const nextElement = getNextElement(event.clientY, currentElement);
    
    if ( // Вставка элемента
        nextElement && 
        activeElement === nextElement.previousElementSibling ||
        activeElement === nextElement
    ) {
        return; // Чтобы не вставлять элемент в тоже самое место
    }
            
        tasksListElement.insertBefore(activeElement, nextElement);


        // Всплывающая панель после перетасовки элементов
        let titles = document.querySelectorAll('.title');
        let popupWindow = document.querySelector('.pop-up-panel');
        for(let i = 0; i < titles.length; i++) {


            titles[i].addEventListener("mouseover", (event) => {
                if(event.type == 'mouseover') {
                   
                    popupWindow.style.marginTop = i*height+'px';
                    popupWindow.style.display = 'block'
                }
            })
            titles[i].addEventListener("mouseout", (event) => {
                if(event.type == 'mouseout') {
                
                    popupWindow.style.display = 'none'
                }
            })
        
        }
        
    });
}
