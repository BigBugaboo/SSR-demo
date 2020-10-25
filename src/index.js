import _ from 'lodash'
import print from './print'

function printMe() {
  console.log('click me')
}

function component() {
  let element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());