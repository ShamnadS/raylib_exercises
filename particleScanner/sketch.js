const r = require('raylib');
const s = require('./scanner');
const p = require('./particle');

const SCREENWIDTH = 500;
const SCREENHEIGHT = 300;
const FPS = 60;

const horizontalScanner1Width = SCREENWIDTH * 0.1;
const horizontalScanner1Height = SCREENHEIGHT;

let horizontalScanner1X = 0;
const horizontalScanner1Y = 0;

const horizontalScanner2Width = SCREENWIDTH * 0.1;
const horizontalScanner2Height = SCREENHEIGHT;

let horizontalScanner2X = SCREENWIDTH - horizontalScanner2Width;
const horizontalScanner2Y = 0;

const verticalScannerWidth = SCREENWIDTH;
const verticalScannerHeight = SCREENHEIGHT * 0.1;

const verticalScannerX = 0;
let verticalScannerY = 0;

const horizontalParticle1X = SCREENWIDTH * 0.5;
const horizontalParticle1Y = 0;
const horizontalParticle1Width = SCREENWIDTH * 0.1;

const horizontalParticle2X = SCREENWIDTH * 0.4;
const horizontalParticle2Y = 0;
const horizontalParticle2Width = 1;

const verticalParticleX = 0;
const verticalParticleY = SCREENHEIGHT * 0.9;
const verticalParticleHeight = 8;


function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    horizontalScanner1X = s.leftToRight(horizontalScanner1X, horizontalScanner1Width, SCREENWIDTH);
    horizontalScanner2X = s.rightToLeft(horizontalScanner2X, horizontalScanner2Width, SCREENWIDTH);
    verticalScannerY = s.topToBottom(verticalScannerY, verticalScannerHeight, SCREENHEIGHT);
}

function analysis() {
    const scanner1Particle1 = s.isParticleDetected(horizontalScanner1X, horizontalScanner1Width, horizontalParticle1X, horizontalParticle1Width);
    const scanner2Particle1 = s.isParticleDetected(horizontalScanner2X, horizontalScanner2Width, horizontalParticle1X, horizontalParticle1Width);
    const scanner1Particle2 = s.isParticleDetected(horizontalScanner1X, horizontalScanner1Width, horizontalParticle2X, horizontalParticle2Width);
    const scanner2Particle2 = s.isParticleDetected(horizontalScanner2X, horizontalScanner2Width, horizontalParticle2X, horizontalParticle2Width);
    const verticalScannerParticle1 = s.isParticleDetected(verticalScannerY, verticalScannerHeight, verticalParticleY, verticalParticleHeight);

    color1 = s.checkIntersection(scanner1Particle1, scanner1Particle2);
    color2 = s.checkIntersection(scanner2Particle1, scanner2Particle2);
    color3 = s.checkIntersection(verticalScannerParticle1, 0);
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    p.createParticle(horizontalParticle1X, horizontalParticle1Y, SCREENHEIGHT, horizontalParticle1Width);
    p.createParticle(horizontalParticle2X, horizontalParticle2Y, SCREENHEIGHT, horizontalParticle2Width);
    analysis();
    p.createParticle(verticalParticleX, verticalParticleY, verticalParticleHeight, SCREENWIDTH);
    analysis();
    r.DrawRectangle(horizontalScanner1X, horizontalScanner1Y, horizontalScanner1Width, horizontalScanner1Height, color1);
    r.DrawRectangle(horizontalScanner2X, horizontalScanner2Y, horizontalScanner2Width, horizontalScanner2Height, color2);
    r.DrawRectangle(verticalScannerX, verticalScannerY, verticalScannerWidth, verticalScannerHeight, color3);
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