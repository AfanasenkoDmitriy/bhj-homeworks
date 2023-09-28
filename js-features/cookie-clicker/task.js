let imgElement = document.getElementById('cookie');
let counterElement = document.getElementById('clicker__counter');
let clickCount = 0;


imgElement.addEventListener('click', function () {
    imgElement.width = ++counterElement.textContent % 2 === 0 ? 200 : 250;
});

