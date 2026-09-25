const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
const width = 50;
const height = 50;

function returnXPosition(width) {
    return windowWidth / 2 - width / 2;
}
function returnYPosition(height) {
    return windowHeight / 2 - height / 2;
}

r.InitWindow(windowWidth, windowHeight, "Rectangle in center");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const x = returnXPosition(width);
    const y = returnYPosition(height);

    r.DrawRectangle(x, y, width, height, r.WHITE);
    r.DrawLine(0, 0, windowWidth, windowHeight, r.BLACK);
    r.DrawLine(0, windowHeight, windowWidth, 0, r.BLACK);
    r.EndDrawing();
}
r.CloseWindow();
