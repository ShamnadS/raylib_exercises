const r = require('raylib');
const s = require('./scanner');


const SCREENWIDTH = 500;
const SCREENHEIGHT = 300;
const FPS = 60;



const scannerWidth = SCREENWIDTH * 0.1;
const scannerHeight = SCREENHEIGHT;

let scannerX = 0;
let scannerY = 0;

function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    scannerX = s.direction(scannerX, scannerWidth, SCREENWIDTH);
}



const X = SCREENWIDTH * 0.3;
const Y = 0;
const width = SCREENWIDTH * 0.2;

function createParticle(particleX, particleY, particleWidth) {
    const color = r.SKYBLUE;
    r.DrawRectangle(particleX, particleY, particleWidth, SCREENHEIGHT, color)
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    createParticle(X, Y, width);
    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, r.WHITE);
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