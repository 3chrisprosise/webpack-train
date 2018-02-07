import _ from 'lodash'
import './style.css'
import Myimg from './my-image.png'
function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    var myIcon = new Image();
    myIcon.sec = Myimg

    element.appendChild(myIcon)
    
    return element;
  }
  
  document.body.appendChild(component());