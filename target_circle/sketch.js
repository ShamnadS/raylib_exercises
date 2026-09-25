const r = require('raylib');
const g = require('./geometry');

const SCREENWIDTH = 800;
const SCREENHEIGHT = 600;

const FPS = 60;

const sourceX = SCREENWIDTH * 0.2;
const sourceY = SCREENHEIGHT * 0.5;

const target1_X = SCREENWIDTH * 0.5;
const target1_Y = SCREENHEIGHT * 0.3;

const target2_x = SCREENWIDTH * 0.8;
const target2_Y = SCREENHEIGHT * 0.7;

const target3_x = SCREENWIDTH * 0.5;
const target3_Y = SCREENHEIGHT * 0.2;

function setup() {
    r.InitWindow(SCREENWIDTH, SCREENHEIGHT, "Target Circle");
    r.SetTargetFPS(FPS);
}


function update() {

}


function drawSourceAndTarget(sourceX, sourceY, target1_X, target1_Y, target2_x, target2_Y) {
    r.DrawCircle(sourceX, sourceY, 40, r.BLUE);
    r.DrawCircle(target1_X, target1_Y, 40, r.RED);
    r.DrawCircle(target2_x, target2_Y, 40, r.RED);
}


function connectToCloserTarget(sourceX, sourceY, target1_X, target1_Y, target2_x, target2_Y) {
    const d1 = g.calcDistance(sourceX, sourceY, target1_X, target1_Y);
    const d2 = g.calcDistance(sourceX, sourceY, target2_x, target2_Y);

    let targetX = target1_X;
    let targetY = target1_Y;

    if (d2 < d1) {
        targetX = target2_x;
        targetY = target2_Y;
    }

    r.DrawLine(sourceX, sourceY, targetX, targetY, r.BLACK);
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawSourceAndTarget(sourceX, sourceY, target1_X, target1_Y, target3_x, target3_Y);
    connectToCloserTarget(sourceX, sourceY, target1_X, target1_Y, target3_x, target3_Y);
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