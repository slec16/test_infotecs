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

 

}




