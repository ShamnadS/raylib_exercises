const r = require('raylib');
const s = require('./scanner');


const SCREENWIDTH = 500;
const SCREENHEIGHT = 300;
const FPS = 60;



const scannerWidth = SCREENWIDTH * 0.1;
const scannerHeight = SCREENHEIGHT;

let scannerX = 0;
let y = 0;

function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    scannerX = s.direction(scannerX, scannerWidth, SCREENWIDTH);
}



function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(scannerX, y, scannerWidth, scannerHeight, r.WHITE);
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