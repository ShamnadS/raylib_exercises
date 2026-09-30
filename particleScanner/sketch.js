const r = require("raylib");
const s = require("./detector");
const a = require("./Range");

const SCREENWIDTH = 500;
const SCREENHEIGHT = 400;
const FPS = 60;

const Y = 0;

let start1X = 0;
let end1;
let scanner1Velocity = 2;
const lowerBound1 = Y;
const upperBound1 = SCREENWIDTH / 2;
const horizontalScannerWidth = SCREENWIDTH * 0.1;
const horizontalScannerHeight = SCREENHEIGHT;




let start2X = SCREENWIDTH / 2;
let end2;
let scanner2Velocity = 2;
const lowerBound2 = SCREENWIDTH / 2;
const upperBound2 = SCREENWIDTH;
const horizontalScanner2Width = SCREENWIDTH * 0.1;
const horizontalScanner2Height = SCREENHEIGHT;


let verticalScannerStart = 0;
let end3;
let scanner3Velocity = 4;
const lowerBound3 = 0;
const upperBound3 = SCREENHEIGHT;
const verticalScannerWidth = SCREENWIDTH;
const verticalScannerHeight = SCREENHEIGHT * 0.1;


const particle1Start = SCREENWIDTH * 0.6;
const horizontalParticle1Width = 10;
const particle1End = particle1Start + horizontalParticle1Width;

const particle2Start = SCREENWIDTH * 0.4;
const horizontalParticle2Width = 1;
const particle2End = particle2Start + horizontalParticle2Width;


const verticalParticleX = Y;
const verticalParticle1Start = SCREENHEIGHT * 0.9;
const verticalParticleHeight = 8;
const verticalParticle1End = verticalParticle1Start + verticalParticleHeight;

const particleColor = r.BLUE;

function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "PARTICLE DETECTOR");
    r.SetTargetFPS(FPS);
}

function update() {
    end1 = start1X + horizontalScannerWidth;
    scanner1Velocity = s.scannerOutOfBound(start1X, end1, lowerBound1, upperBound1, scanner1Velocity);
    start1X = s.changeDirection(start1X, scanner1Velocity);

    end2 = start2X + horizontalScanner2Width;
    scanner2Velocity = s.scannerOutOfBound(start2X, end2, lowerBound2, upperBound2, scanner2Velocity);
    start2X = s.changeDirection(start2X, scanner2Velocity);

    end3 = verticalScannerStart + verticalScannerHeight;
    scanner3Velocity = s.scannerOutOfBound(verticalScannerStart, end3, lowerBound3, upperBound3, scanner3Velocity);
    verticalScannerStart = s.changeDirection(verticalScannerStart, scanner3Velocity);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    a.createRange(
        particle1Start,
        Y,
        horizontalParticle1Width,
        SCREENHEIGHT,
        particleColor,
    );
    a.createRange(
        particle2Start,
        Y,
        horizontalParticle2Width,
        SCREENHEIGHT,
        particleColor
    );
    a.createRange(
        verticalParticleX,
        verticalParticle1Start,
        SCREENWIDTH,
        verticalParticleHeight,
        particleColor
    );

    a.createRange(
        start1X,
        Y,
        horizontalScannerWidth,
        horizontalScannerHeight,
        s.isParticleDetected(
            start1X,
            end1,
            particle1Start,
            particle1End,
            particle2Start,
            particle2End,
        )
    );
    a.createRange(
        start2X,
        Y,
        horizontalScanner2Width,
        horizontalScanner2Height,
        s.isParticleDetected(
            start2X,
            end2,
            particle1Start,
            particle1End,
            particle2Start,
            particle2End,
        )
    );
    a.createRange(
        Y,
        verticalScannerStart,
        verticalScannerWidth,
        verticalScannerHeight,
        s.isParticleDetected(
            verticalScannerStart,
            end3,
            verticalParticle1Start,
            verticalParticle1End)
    );
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
