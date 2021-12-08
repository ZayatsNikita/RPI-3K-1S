let centerX = 0;
let centerY = 0;
let radiusLen = 100;
let angle = 0

let timer = setInterval(() => {
    angle += 0.02
    let offset_x = radiusLen * Math.sin(angle);
    let offset_y = radiusLen * Math.cos(angle);
    circle.style.left = (centerX - 25 + offset_x) + 'px';
    circle.style.top = (centerY - 25 + offset_y) + 'px';
}, 10);

function mouseMove(evt) {
    centerX = evt.clientX;
    centerY = evt.clientY;
    orbit.style.left = (centerX - 15) + 'px';
    orbit.style.top = (centerY - 15) + 'px';
}