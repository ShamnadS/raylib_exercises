const r = require('raylib');
const geometry = require('./geometry');





function setup() {
    r.InitWindow(300, 300, "hello");
    r.SetTargetFPS(60);
}

function update() {
    x++;

}



let x = 100;
const t = 100;
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(x, t, 70, r.RED);
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