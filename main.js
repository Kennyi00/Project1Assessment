const input = document.getElementById('input');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const count = document.getElementById('count');

let currentCount = 0;

increment.addEventListener('click', () => {
    currentCount += Number(input.value);
    count.textContent = currentCount;
    updateCountColor();
});

decrement.addEventListener('click', () => {
    currentCount -= Number(input.value);
    count.textContent = currentCount;
    updateCountColor();
});

function updateCountColor() {
    if (currentCount < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}

updateCountColor();