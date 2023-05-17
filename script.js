var display = document.getElementById('display');
var btns = document.querySelectorAll('.button-container div');


//var needs to be declared glabally in order keep track of previous values
var op1 = null;
var operator = null;
var op2 = null;
let res = null;
function calc() {
    //'this' contains the element on which the handler is called
    // console.log(this.getAttribute('data-value'));
    var temp = this.getAttribute('data-value');

    if (temp === 'back' || temp === 'ce' || temp === 'back' || temp === '^' || temp === 'sc' || temp === '' || temp === '%' || temp === '1/x') {
        return;
    }
    if (temp === '+' || temp === '-' || temp === '/' || temp === '*') {
        if (operator === null) {
            if (display.innerHTML !== '') {
                operator = temp;
                op1 = display.innerText;
                // console.log(op1, operator);
                display.innerHTML = '';
            }

        } else if (display.innerHTML !== '') {
            op2=display.innerHTML;
            res = eval(op1+operator+op2);
            operator = temp;
            op1 = res;
            op2 = null;
            display.innerHTML=res;
            
        }

    } else if (temp === '=') {

        if (operator !== null && display.innerText !== '') {
            // console.log('inside')
            op2 = display.innerText;

            res = eval(op1 + " " + operator + " " + op2);
            // console.log(res);

            operator = null;
            display.innerHTML = '';
        }
    } else if (temp == 'c') {
        display.innerHTML = '';
        op1 = null;
        op2 = null;
        operator = null;

    } else {

        display.innerText += temp;
    }
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', calc);
}

