import {ExpandableText} from './ExpText'
import {TabsManager} from './tabs'
import {slider} from './slide'
import {hamburger} from './hamb'
import {OrderForm} from './forms/order-form';


  

window.onload = () => { 

  const textElems = document.querySelectorAll('.expandable-text'); 
   
  for (const el of textElems) { 
    new ExpandableText(el, 80); 
  } 

  const tabsElem = document.getElementById('myTabs'); 
  new TabsManager(tabsElem);

  slider();

  hamburger();

  new OrderForm();

}