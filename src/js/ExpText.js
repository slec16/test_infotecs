// сварачивание текста
const TogglePhrases = { 
    Collapse: 'Свернуть', 
    Expand: 'Развернуть' 
}; 

export class ExpandableText { 
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
