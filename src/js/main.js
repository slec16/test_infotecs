import {ExpandableText} from './ExpText'
import {TabsManager} from './tabs'
import {slider} from './slide'
import {openNav, closeNav} from './hamb'


  

window.onload = () => { 

  const textElems = document.querySelectorAll('.expandable-text'); 
   
  for (const el of textElems) { 
    new ExpandableText(el, 80); 
  } 

  const tabsElem = document.getElementById('myTabs'); 
  new TabsManager(tabsElem);

  slider();


  let openHamb = document.querySelector("[id=start]");
  openHamb.onclick = openNav;


  let elems = document.querySelectorAll("[id='foo']");
  for(let i = 0; i < elems.length; i++ ){
    elems[i].onclick = closeNav;
  }

}