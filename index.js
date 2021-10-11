const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const INTERVAL_PERIOD = 1000;

const startBtn = document.querySelector('[data-action = "start"]')
const stopBtn = document.querySelector('[data-action = "stop"]')

let inrevalID = null

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    startBtn.setAttribute('disabled', '')
    inrevalID = setInterval(getBgColor, INTERVAL_PERIOD)
}

function onStopBtnClick() {
    startBtn.removeAttribute('disabled', '')
    clearInterval(inrevalID)
}

function getBgColor() {
    document.body.style.background =
        colors[randomIntegerFromInterval(0, colors.length - 1)]
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};