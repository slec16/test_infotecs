const height = 31;
// let titles = document.querySelectorAll('.title');
// let popupWindow = document.querySelector('.pop-up-panel');


export function popupPanel() {
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
}