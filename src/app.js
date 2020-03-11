// math.js
import './style/app.scss';
import facebook from './assets/facebook.png';

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

const fbImageEL = document.createElement('img');
fbImageEL.setAttribute('src', facebook);
document.body.appendChild(fbImageEL);

console.log(sum, substract);
console.log(process.env.NODE_ENV);
