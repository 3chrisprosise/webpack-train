import _ from 'lodash'
import './style.css'
import Myimg from './icon.png'
import printMe from './print'
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    var myIcon = new Image();
    myIcon.sec = Myimg

    element.appendChild(myIcon)
    
    return element;
  }
  
  document.body.appendChild(component());