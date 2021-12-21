const FIRST = document.querySelector('#firstnumber');
const SECOND = document.querySelector('#secondnumber');
const ACTION = document.querySelector('#action');
const BUTTON = document.querySelector('.button');
const RESULT = document.querySelector('#result');

BUTTON.addEventListener('click', count);

function count() {
    switch (ACTION.value) {
        case "1":
            RESULT.value = +FIRST.value + +SECOND.value;
            break;
        case "2":
            RESULT.value = FIRST.value - SECOND.value;
            break;
        case "3":
            RESULT.value = FIRST.value * SECOND.value;
            break;
        case "4":
            RESULT.value = FIRST.value / SECOND.value;
            break;
    }
    RESULT.value = Math.round(RESULT.value);
    RESULT.textContent = RESULT.value;
}


