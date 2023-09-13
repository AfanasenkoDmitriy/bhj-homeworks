let imgElement = document.getElementById('cookie');
let counterElement = document.getElementById('clicker__counter');
let clickCount = 0;

imgElement.addEventListener('click', function() {
    
    clickCount++;
    counterElement.textContent = clickCount;
}
);

imgElement.addEventListener('click', function () {
    
    if (clickCount % 2 === 0) {
        imgElement.width = 150;
    } else {
        imgElement.width = 200;
    }
});

