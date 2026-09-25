const r = require("raylib");
const ScreenWidth = 400;
const ScreenHeight = 400;
let rectWidth = 50;
let rectHeight = 50;

function setup() {
    r.InitWindow(ScreenWidth, ScreenHeight, "Rectangle in center");
    r.SetTargetFPS(60);
}

function update() {
    // rectHeight--;
    rectWidth++;
}

function calcOffset(x1, x2) {
    return (x1 - x2) / 2;
}

function draw() {
    const rectX = calcOffset(ScreenWidth, rectWidth);
    const rectY = calcOffset(ScreenHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE)
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