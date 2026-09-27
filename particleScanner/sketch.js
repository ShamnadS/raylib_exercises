const r = require('raylib');
const s = require('./scanner');
const p = require('./particle');

const SCREENWIDTH = 500;
const SCREENHEIGHT = 300;
const FPS = 60;

const scanner1Width = SCREENWIDTH * 0.1;
const scanner1Height = SCREENHEIGHT;

const particle1X = SCREENWIDTH * 0.5;
const particle1Y = 0;
const particle1Width = SCREENWIDTH * 0.1;

const particle2X = SCREENWIDTH * 0.4;
const particleY2 = 0;
const particle2Width = 1;

let scanner1X = 0;
let scanner1Y = 0;

const scanner2Width = SCREENWIDTH * 0.1;
const scanner2Height = SCREENHEIGHT;

let scanner2X = SCREENWIDTH - scanner2Width;
let scanner2Y = 0;
let color1;
let color2;

function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    scanner1X = s.LeftToRight(scanner1X, scanner1Width, SCREENWIDTH);
    scanner2X = s.RightToLeft(scanner2X, scanner2Width, SCREENWIDTH);
}

function analysis() {
    const scanner1Particle1 = s.isParticleDetected(scanner1X, scanner1Width, particle1X, particle1Width);
    const scanner2Particle1 = s.isParticleDetected(scanner2X, scanner2Width, particle1X, particle1Width);
    const scanner1Particle2 = s.isParticleDetected(scanner1X, scanner1Width, particle2X, particle2Width);
    const scanner2Particle2 = s.isParticleDetected(scanner2X, scanner2Width, particle2X, particle2Width);

    color1 = s.checkIntersection(scanner1Particle1, scanner1Particle2);
    color2 = s.checkIntersection(scanner2Particle1, scanner2Particle2);
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    p.createParticle(particle1X, particle1Y, SCREENHEIGHT, particle1Width);
    p.createParticle(particle2X, particleY2, SCREENHEIGHT, particle2Width);
    analysis();
    r.DrawRectangle(scanner1X, scanner1Y, scanner1Width, scanner1Height, color1);
    r.DrawRectangle(scanner2X, scanner2Y, scanner2Width, scanner2Height, color2);
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