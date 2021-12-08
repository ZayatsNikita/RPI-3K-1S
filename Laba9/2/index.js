let pressMeButton = document.getElementById('pressMeButton');
let timeString = document.getElementById('timeString');
let intervalId;
let startTime;

pressMeButton.addEventListener('mouseenter', function() {
    this.style.visibility = 'hidden';
    setTimeout(spawnButton, 3000);
    intervalId = setInterval(showTime, 10);
    startTime = Date.now();
});

function showTime() {
    timeString.innerText = ((Date.now() - startTime) / 1000).toFixed(2);
}

function spawnButton() {
    let computedStyle = getComputedStyle(pressMeButton.parentNode);

    let marginTop = Math.floor(Math.random() * (parseInt(computedStyle.height) - 65));
    let marginLeft = Math.floor(Math.random() * (parseInt(computedStyle.width) - 65));
    
    pressMeButton.style.marginTop = marginTop + 'px';
    pressMeButton.style.marginLeft = marginLeft + 'px';
    pressMeButton.style.visibility = 'visible';

    clearInterval(intervalId);
}