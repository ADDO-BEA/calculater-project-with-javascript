document.getElementById("display");

function deleteDisplay() {
    display.value = '';
}

function presstoDisplay(value) {
    display.value += value;
}

function solve() {
    var equation = display.value;
    var result = eval(equation);
    display.value = result;
}