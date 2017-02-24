import _ from 'lodash';
import 'babel-polyfill';


function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    var str = 'To be, or not to be, that is the question.';

    console.log(str.endsWith('question.')); // true
    return element;
}

document.body.appendChild(component());
