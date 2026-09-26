const r = require('raylib');
const s = require('./scanner');
const p = require('./particle');


const SCREENWIDTH = 500;
const SCREENHEIGHT = 300;
const FPS = 60;



const scannerWidth = SCREENWIDTH * 0.1;
const scannerHeight = SCREENHEIGHT;

const particleX1 = SCREENWIDTH * 0.3;
const particleY1 = 0;
const particleWidth1 = SCREENWIDTH * 0.2;

const particleX2 = SCREENWIDTH * 0.9;
const particleY2 = 0;
const particleWidth2 = 1.5;

let scannerX = 0;
let scannerY = 0;

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
    p.createParticle(particleX1, particleY1, SCREENHEIGHT, particleWidth1);
    p.createParticle(particleX2, particleY2, SCREENHEIGHT, particleWidth2);
    const particle1 = s.isParticleDetected(scannerX, scannerWidth, particleX1, particleWidth1);
    const particle2 = s.isParticleDetected(scannerX, scannerWidth, particleX2, particleWidth2);
    const scannerColor = s.checkIntersection(particle1, particle2);
    r.DrawRectangle(scannerX, scannerY, scannerWidth, scannerHeight, scannerColor);
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