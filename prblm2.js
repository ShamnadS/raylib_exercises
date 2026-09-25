const r = require("raylib");
const ScreenWidth = 1000;
const ScreenHeight = 800;

const outerX = 200;
const outerY = 200;
const outerWidth = 600;
const outerHeight = 300;

const innerWidth = 300;
const innerHeight = 100;


function setup() {
    r.InitWindow(ScreenWidth, ScreenHeight, "problem 2 using skeleton");
    r.SetTargetFPS(60);
}

function update() {

}

function center(x, y, z) {
    return (x - y) / 2 + z;
}



function draw() {
    const innerX = center(outerWidth, innerWidth, outerX);
    const innerY = center(outerHeight, innerHeight, outerY);


    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, r.WHITE);
    r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, r.RED);
    r.EndDrawing();

}

function loop() {

    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {

    setup();
    loop();

    r.CloseWindow();

}

main();