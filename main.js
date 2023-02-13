
let b = document.getElementsByClassName("ball")[0]
let scene = document.getElementsByClassName("scene")[0]

console.log(b)

let y = 32, x = 32;
let v = 0;
let vx = 4;

function step() {
    let H = scene.clientHeight - b.clientHeight;
    let W = scene.clientWidth - b.clientWidth;
    v += 1 / 4;
    x += vx;
    y += v;
    console.log(v)
    let dy = y - H
    if (dy >= 0) {
        y -= dy * 2;
        v *= -1;
    }
    if (y <= 0) {
        y -= y * 2;
        v *= -1
    }
    let dx = x - W;
    if (dx >= 0) {
        x -= dx * 2;
        vx *= -1
    }
    if (x <= 0) {
        x -= x * 2;
        vx *= -1
    }

    b.style.top = y + "px"
    b.style.left = x + "px"
}



setInterval(step, 10)