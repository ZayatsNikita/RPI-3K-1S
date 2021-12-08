let ball = document.getElementById('ball');
document.getElementById('footballField').addEventListener('click', handleClick);

function handleClick(evt){
    if (evt.which == 1){
        let currentBallPosition = ball.getBoundingClientRect();

        let ballHeight = currentBallPosition.height;
        let ballWidth = currentBallPosition.width;
        
        ball.style.left = `${evt.pageX - ballWidth / 2}px`;
        ball.style.top = `${evt.pageY - ballHeight / 2}px`;
    }
}