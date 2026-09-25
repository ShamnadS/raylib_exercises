const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;

const outerWidth = 700;
const outerHeight = 400;
const outerX = 10;
const outerY = 10;

const widthOfSmall = 600;
const heightOfSmall = 300;

function returnXPosition(width) {
    return outerX + (outerWidth - width) / 2;
}

function returnYPosition(height) {
    return outerHeight / 2 - height / 2 + outerY;
}

r.InitWindow(windowWidth, windowHeight, "Rectangle in center");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const x = returnXPosition(widthOfSmall);
    const y = returnYPosition(heightOfSmall);

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, r.WHITE);

    r.DrawRectangle(x, y, widthOfSmall, heightOfSmall, r.RED);

    r.EndDrawing();
}
r.CloseWindow();
