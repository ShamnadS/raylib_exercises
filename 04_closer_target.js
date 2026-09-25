const r = require("raylib");
const sourceX = 150;
const sourceY = 300;

const target1X = 400;
const target1Y = 200;

const target2X = 700;
const target2Y = 500;

function findDistance(x, y) {
    return (x - sourceX + (y - sourceY)) ** 0.5;
}

r.InitWindow(800, 600, "Find the closer target");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourceX, sourceY, 20, r.BLUE);
    r.DrawCircle(target1X, target1Y, 20, r.RED);
    r.DrawCircle(target2X, target2Y, 20, r.RED);

    const distance1 = findDistance(target1X, target1Y);
    const distance2 = findDistance(target2X, target2Y);

    if (distance1 < distance2) {
        r.DrawLine(sourceX, sourceY, target1X, target1Y, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, target2X, target2Y, r.BLACK);
    }
    r.EndDrawing();
}
r.CloseWindow();
