import { Hi } from './asf';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = Hi();
  
    return element;
  }
  
  document.body.appendChild(component());