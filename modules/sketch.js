const r = require('raylib');
const geometry = require('./geometry');

const outerW = 200;
const outerH = 100;

const innerW = 100;
const innerH = 50;

let x1 = 10;
let y1 = 10;

function setup() {
    r.InitWindow(300, 300, "hello");
    r.SetTargetFPS(60);
}

function update() {

}



function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x1, y1, outerW, outerH, r.RED);
    const x2 = geometry.calcOffset(outerW, innerW, x1);
    const y2 = geometry.calcOffset(outerH, innerH, y1);
    r.DrawRectangle(x2, y2, innerW, innerH, r.WHITE);
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    return r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    teardown,
};