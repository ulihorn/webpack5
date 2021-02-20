import _ from 'lodash';
//import application from 'stylesheets/application.scss';
import { sayHello, sayGoodbye, authors, person1 } from './greeting';
//var sayHello = require('./greeting.js');
//import $ from '../downloaded_libs/jquery';
import $ from 'jquery';

function component() {
    let element = document.createElement('div');
    // Lodash, currently included via a script, is required for this
    // line to work
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    return element;
}
document.body.appendChild(component());

sayHello();
sayGoodbye();
console.log(`This is the second author: ${authors[1][0]}`);

console.log(person1);


$('body').append('<div style="background:yellow;padding:10px;">Hello jQuery!</div>');