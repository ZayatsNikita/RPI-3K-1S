
let inputWebSite = document.getElementById('inputWebSite');
let newWindowCheckBox = document.getElementById('newWindowFlag');
let iframe = document.getElementById('windowOfBrowser');
iframe.open = function(link) { this.src = link; };

let history = [];
let curLink = 0;
let curWindow = iframe;

function openWebSite(link) {
    curWindow.open(link);
}

document.getElementById('openButton').addEventListener('click', function() {
    openWebSite(inputWebSite.value);
    if ((history.length > 0 && history[history.length - 1] !== inputWebSite.value)
        || history.length == 0) {
        curLink = history.length;
        history.push(inputWebSite.value);
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    if (curLink > 0) {
        curLink -= 1;
        inputWebSite.value = history[curLink];
    }
});

document.getElementById('forwardButton').addEventListener('click', function() {
    if (curLink + 1 < history.length) {
        curLink += 1;
        inputWebSite.value = history[curLink];
    }
});

document.getElementById('newWindowFlag').addEventListener('change', function() {
    curWindow = (this.checked? window : iframe);
});