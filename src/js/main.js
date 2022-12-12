const TogglePhrases = { 
    Collapse: 'Свернуть', 
    Expand: 'Развернуть' 
}; 

class ExpandableText { 
  constructor(elem, maxLength = 150) { 
    this.maxLength = maxLength; 
    this.elem = elem;     
    this.originalText = elem.textContent; 
     
    this.isToggle = false; 
     
    this.toggleBtn = document.createElement('button'); 
    this.toggleBtn.className = "expandable-btn"
    this.toggleBtn.textContent = TogglePhrases.Expand; 
    this.toggleBtn.addEventListener('click', () => this.toggle()); 
     
    this.elem.textContent = this._getShortText(); 
    this.elem.append(this.toggleBtn); 
  } 
   
  toggle() { 
    this.isToggle = !this.isToggle; 
     
    this.toggleBtn.textContent = this.isToggle 
      ? TogglePhrases.Collapse 
      : TogglePhrases.Expand; 
     
    this.elem.textContent = this.isToggle 
      ? this.originalText 
      : this._getShortText(); 
     
    this.elem.append(this.toggleBtn); 
  } 
   
  _getShortText() { 
    return (this.originalText.slice(0, this.maxLength)) + '...'; 
  } 
} 



class TabItem { 
  constructor(link, content) { 
    this.link = link; 
    this.content = content; 
  } 
   
  onClick(callback) { 
    this.link.addEventListener('click', () => callback()); 
  } 
   
  activate() { 
    this._toggle(true);   
  } 
   
  deactivate() { 
    this._toggle(false); 
  } 
   
  _toggle(activate) { 
    this.link.classList.toggle('active', activate); 
    this.content.classList.toggle('active', activate); 
  } 
} 

class TabsManager { 
  constructor(tabsElem) { 
    this.tabs = []; 
    this.activeTab = null; 
     
    this.init(tabsElem);     
    this.activateTab(this.tabs[0]); 
  } 
   
  init(tabsElem) { 
    const links = tabsElem.querySelectorAll('.tabs__links li'); 
    const contents = tabsElem.querySelectorAll('.tabs__item'); 
         
    for (let i = 0; i < links.length; i++) { 
      const tab = new TabItem(links[i], contents[i]); 
      this.tabs.push(tab); 
       
      tab.onClick(() => this.activateTab(tab));   
    } 
  } 
   
  activateTab(tab) { 
    if (this.activeTab) { 
      this.activeTab.deactivate(); 
    } 
    this.activeTab = tab; 
    this.activeTab.activate(); 
  }
} 







window.onload = () => { 

  const textElems = document.querySelectorAll('.expandable-text'); 
   
  for (const el of textElems) { 
    new ExpandableText(el, 80); 
  } 


  const smoothScrollLinks = document.querySelectorAll('.smooth-scroll'); 
  for (let link of smoothScrollLinks) { 
    link.addEventListener('click', event => { 
      event.preventDefault(); 
       
      const target = event.target; 
      const elementToScroll = document.querySelector(target.getAttribute('href')); 
      elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'end'}); 
    }); 
  } 


  const tabsElem = document.getElementById('myTabs'); 
  new TabsManager(tabsElem);
}