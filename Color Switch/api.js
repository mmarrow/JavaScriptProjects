const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    switchColors();
});

async function getApiColor() {
    let url = 'http://www.colourlovers.com/api/patterns/random?format=json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function switchColors() {
    let data = await getApiColor();
    let hexColor = '#' + data[0].colors[0];
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}