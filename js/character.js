var imageContainer = document.getElementById('image-container');
var currentPosition = 1;
var timer;

document.getElementById('start-button').addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(changeBackgroundPosition, 1000);
    }
});

document.getElementById('stop-button').addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});

function changeBackgroundPosition() {
    imageContainer.style.backgroundPosition = calculateBackgroundPosition(currentPosition);
    currentPosition = (currentPosition % 12) + 1;
    if (currentPosition === 4) {
        currentPosition = 1;
    }
}

function calculateBackgroundPosition(position) {
    var column = (position - 1) % 3;
    var row = Math.floor((position - 1) / 3);
    var backgroundX = column * -32;
    var backgroundY = row * -32;
    return backgroundX + 'px ' + backgroundY + 'px';
}

var positionDisplay = document.getElementById('position-display');

imageContainer.addEventListener('mousemove', function(event) {
    var containerRect = imageContainer.getBoundingClientRect();
    var offsetX = event.clientX - containerRect.left;
    var offsetY = event.clientY - containerRect.top;
    var positionText = 'Position: (' + offsetX + ', ' + offsetY + ')';
    positionDisplay.textContent = positionText;
});

imageContainer.addEventListener('mouseout', function() {
    positionDisplay.textContent = 'Position: -';
});
