/* Increment by 1 from 1 to 15 for item QTY value */

var i = 1;
function incrementUP() {
    if (i < 15) {
        var incrementX = document.getElementById('counter-1').value = ++i;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

/* Decrement by 1 from 1 to 15 for item QTY value for item 1 */

function incrementDown() {
    if (i < 16 && i != 1) {
        var x = document.getElementById('counter-1').value = --i;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-1").onclick = function () {
    incrementUP();
};


document.getElementById("minus-1").onclick = function () {
    incrementDown();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-1').onclick = function () {
    qtyPriceAlert();
};

function qtyPriceAlert() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}

/*  Universal Info/Help Code Block */

document.getElementById('help-1').onclick = function () {
    helpInfoAlert()();
};

document.getElementById('help-2').onclick = function () {
    helpInfoAlert()();
};

document.getElementById('help-3').onclick = function () {
    helpInfoAlert()();
};

document.getElementById('help-4').onclick = function () {
    helpInfoAlert()();
};

document.getElementById('help-5').onclick = function () {
    helpInfoAlert()();
};

document.getElementById('help-6').onclick = function () {
    helpInfoAlert()();
};


function helpInfoAlert() {
    document.getElementById('info-help-block').style.display = 'block';
}

/*----Item-2------*/

/* Increment by 1 from 1 to 15 for item QTY value for item 2 */

var c = 1;
function incrementUP2() {
    if (c < 15) {
        var incrementX = document.getElementById('counter-2').value = ++c;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

/* Dencrement by 1 from 1 to 15 for item QTY value for item 2 */

function incrementDown2() {
    if (c < 16 && c != 1) {
        var x = document.getElementById('counter-2').value = --c;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-2").onclick = function () {
    incrementUP2();
};


document.getElementById("minus-2").onclick = function () {
    incrementDown2();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-2').onclick = function () {
    qtyPriceAlert2();
};

function qtyPriceAlert2() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}

/*  Item 3  */

var d = 1;

function incrementUP3() {
    if (d < 15) {
        var incrementX = document.getElementById('counter-3').value = ++d;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

function incrementDown3() {
    if (d < 16 && d != 1) {
        var x = document.getElementById('counter-3').value = --d;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-3").onclick = function () {
    incrementUP3();
};


document.getElementById("minus-3").onclick = function () {
    incrementDown3();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-3').onclick = function () {
    qtyPriceAlert3();
};

function qtyPriceAlert3() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}


/*----Item-4------*/

/* Increment by 1 from 1 to 15 for item QTY value */

var e = 1;
function incrementUP4() {
    if (e < 15) {
        var incrementX = document.getElementById('counter-4').value = ++e;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

/* Dencrement by 1 from 1 to 15 for item QTY value for item 2 */

function incrementDown4() {
    if (e < 16 && e != 1) {
        var x = document.getElementById('counter-4').value = --e;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-4").onclick = function () {
    incrementUP4();
};


document.getElementById("minus-4").onclick = function () {
    incrementDown4();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-3').onclick = function () {
    qtyPriceAlert4();
};

function qtyPriceAlert4() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}


/* Item 5 */

var g = 1;
function incrementUP5() {
    if (g < 15) {
        var incrementX = document.getElementById('counter-5').value = ++g;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

function incrementDown5() {
    if (g < 16 && g != 1) {
        var x = document.getElementById('counter-5').value = --g;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-5").onclick = function () {
    incrementUP5();
};


document.getElementById("minus-5").onclick = function () {
    incrementDown5();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-5').onclick = function () {
    qtyPriceAlert5();
};

function qtyPriceAlert5() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}


/*----Item-6------*/

var j = 1;
function incrementUP6() {
    if (j < 15) {
        var incrementX = document.getElementById('counter-6').value = ++j;
        document.getElementById('cart-sub-total').innerHTML = incrementX.toString();
    }
}

function incrementDown6() {
    if (j < 16 && j != 1) {
        var x = document.getElementById('counter-6').value = --j;
        document.getElementById('cart-sub-total').innerHTML = x.toString();
    }
}

document.getElementById("plus-6").onclick = function () {
    incrementUP6();
};


document.getElementById("minus-6").onclick = function () {
    incrementDown6();
};

/*On click event display alert/message containing the QTY and Item Price*/

document.getElementById('buy-now-6').onclick = function () {
    qtyPriceAlert6();
};

function qtyPriceAlert6() {
    document.getElementById('add-to-cart-block').style.display = 'block';
}
