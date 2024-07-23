const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minutes');
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue === false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}
function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    } else if(sign === "-"){
        resultValue = firstValue - secondValue;
    } else if(sign === "x"){
        resultValue = firstValue * secondValue;
    }else if(sign === "÷"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue
    }

    result.innerHTML = resultValue;
})
percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100
    }

    result.innerHTML = resultValue;
})


clear.addEventListener('click', () => {
    result.innerHTML = 0;

    let firstValue = "";
    let isFirstValue = false;
    let secondValue = "";
    let isSecondValue = false;
    let sign = "";
    let resultValue = 0;
})





































const updateTime = () => {
    const currentTime = new Date();
    
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2,'0');
    
}
setInterval(updateTime, 1000);
updateTime();