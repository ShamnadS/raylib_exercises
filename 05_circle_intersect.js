const r = require("raylib");

const screenWidth = 900;
const screenHeight = 700;
const fps = 60;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "circle");
    r.SetTargetFPS(fps);
}

const circle1_X = 200;
const circle1_Y = 200;
const radius1 = 90;

const circle2_X = 380;
const circle2_Y = 200;
const radius2 = 70;



function update() {

}

function findDistance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

function checkIntersection(distance) {
    if (distance - (radius1 + radius2) <= 0) {
        return true;
    }
}

function draw() {

    r.BeginDrawing();
    const distance = findDistance(circle1_X, circle1_Y, circle2_X, circle2_Y);
    let color = checkIntersection(distance) ? r.RED : r.BLACK;
    r.DrawCircle(circle1_X, circle1_Y, radius1, color);
    r.DrawCircle(circle2_X, circle2_Y, radius2, color);
    r.EndDrawing();

}

function loop() {
    while (!r.WindowShouldClose()) {
        r.ClearBackground(r.WHITE)
        update();
        draw();
    }
}


function main() {
    setup();
    loop();

}
main();