// циферблат
const hour = document.querySelector('#h');
const minute = document.querySelector('#m');
const second = document.querySelector('#s');
// кнопки
const btnWait = document.querySelector('#btnWait');
const btnStartStop = document.querySelector('#btnStartStop');
const btnReset = document.querySelector('#btnReset');
// время
let h = 0;
let m = 0;
let s = 0;
// проверки
let intrvalOn_off = 0;
let intervalID = 0;
let dClick = 0;

btnStartStop.addEventListener('click', stopwatch);
btnWait.addEventListener('click', teamStop);
btnReset.addEventListener('click',Reset)

function stopwatch() {
    if (intrvalOn_off == 0) {
        intrvalOn_off = 1;
        intervalID = setInterval(() => {
            s++
            if (s < 60) { //эта проводка нужна для замены цифры 60 на 0
                second.innerHTML = s;
            } else {
                second.innerHTML = 0;
            }

            if (s == 60) {
                s = 0;
                m++
                second.innerHTML = s;
                if (m < 60) { //эта проводка нужна для замены цифры 60 на 0
                    minute.innerHTML = m;
                } else {
                    minute.innerHTML = 0;
                }

            } else if (m == 60) {
                m = 0;
                minute.innerHTML = m;
                h++
                hour.innerHTML = h;
            }
        }, 1000);

        this.classList.add('stop');
        this.innerHTML = 'Stop';
    }
    else if (intrvalOn_off == 1) {
        // останавливает и обнуляет значение таймера
        intrvalOn_off = 0;
        clearInterval(intervalID);
        h = 0;
        m = 0;
        s = 0;
        hour.innerHTML = 0;
        minute.innerHTML = 0;
        second.innerHTML = 0;

        this.classList.remove('stop');
        this.innerHTML = 'Start';
    }
}

function teamStop() {
    if (dClick == 1) {
        clearInterval(intervalID);
        btnStartStop.classList.remove('stop');
        btnStartStop.innerHTML = 'Start';
        intrvalOn_off = 0;
    }
    // двойной клик (время между нажатиями не более 300 мс!)
    dClick = 1;
    setTimeout(() => {
        dClick = 0;
    }, 300);
}

function Reset(){
    h = 0;
    m = 0;
    s = 0;
    hour.innerHTML = 0;
    minute.innerHTML = 0;
    second.innerHTML = 0;
}