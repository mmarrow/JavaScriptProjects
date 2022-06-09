const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const count = document.getElementById('count');
let currentCount = Number(count.textContent);

increase.addEventListener('click', (e) => {
    increaseCount();
});

decrease.addEventListener('click', (e) => {
    decreaseCount();
});

reset.addEventListener('click', (e) => {
    resetCount();
});

increaseCount = () => {
    currentCount = Number(currentCount += 1);
    setCountColor(currentCount);
    return count.innerHTML = currentCount;
};

decreaseCount = () => {
    currentCount = Number(currentCount -= 1);
    setCountColor(currentCount);
    return count.innerHTML = currentCount;
};

resetCount = () => {
    currentCount = 0;
    setCountColor(currentCount);
    return count.innerHTML = currentCount;
};

setCountColor = (currentCount) => {
    if (currentCount === 0) {
        count.style.color = 'darkgray';
    } 
    if (currentCount >= 1 ) {
        count.style.color = 'green';
    } 
    if (currentCount < 0) {
        count.style.color = 'red';
    }
};
