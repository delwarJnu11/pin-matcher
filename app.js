//generate pin
function generatePin() {
    const randomNumber = Math.random() * 10000;
    const roundNumber = Math.round(randomNumber);
    if (roundNumber > 999) {
        return roundNumber;
    } else {
        return generatePin();
    }
};
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = generatePin();
    const screen = document.getElementById('screen');
    // console.log(pin)
    screen.value = pin;
});
//Calc body 
document.getElementById('all-buttons').addEventListener('click', function (event) {
    const buttonText = event.target.innerText;
    const display = document.getElementById('display');
    if (buttonText == 'C') {
        display.value = '';
    } else if (buttonText == "<") {
        display.value = display.value.substring(0, display.value.length - 1);
    } else {
        display.value += buttonText;
    }
});
//check pin
document.getElementById('submit-btn').addEventListener('click', function () {
    const screenValue = document.getElementById('screen').value;
    const displayValue = document.getElementById('display').value;
    if (screenValue == displayValue) {
        document.querySelector('.success').style.display = 'block';
        document.querySelector('.fail').style.display = 'none';
    } else if (screenValue != displayValue) {
        document.querySelector('.success').style.display = 'none';
        document.querySelector('.fail').style.display = 'block';
    }
})