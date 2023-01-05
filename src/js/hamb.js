function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// const tap = document.getElementById('foo');
// tap.onclick = closeNav;

// let elems = document.querySelectorAll("[id='foo']");
// for(let i = 0; i < elems.length; i++ ){
//     elems[i].onclick = closeNav;
// }


export function hamburger() {
        
    let openHamb = document.querySelector("[id=start]");
    openHamb.onclick = openNav;
    let elems = document.querySelectorAll("[id='foo']");
    for(let i = 0; i < elems.length; i++ ){
        elems[i].onclick = closeNav;
    }
    let closeBtn = document.querySelector("[id=closebtn]");
    closeBtn.onclick = closeNav;
}