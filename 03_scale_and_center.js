const r = require("raylib");
const windowWidth = 800;
const windowHeight = 500;

const widthOfLarge = 700;
const heightOfLarge = 400;
const XValueOfLarge = 10;
const YValueOfLarge = 10;

const decimalWidth = 0.8;
const decimalHeight = 0.8;

function returnWidthOrHeight(decimal, widthOrHeight) {
    return decimal * widthOrHeight;
}

function returnXPosition(width) {
    return widthOfLarge / 2 - width / 2 + XValueOfLarge;
}
function returnYPosition(height) {
    return heightOfLarge / 2 - height / 2 + YValueOfLarge;
}

r.InitWindow(windowWidth, windowHeight, "Rectangle in center");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const widthOfSmall = returnWidthOrHeight(decimalWidth, widthOfLarge);
    const heightOfSmall = returnWidthOrHeight(decimalHeight, heightOfLarge);
    const x = returnXPosition(widthOfSmall);
    const y = returnYPosition(heightOfSmall);

    r.DrawRectangle(
        XValueOfLarge,
        YValueOfLarge,
        widthOfLarge,
        heightOfLarge,
        r.WHITE,
    );

    r.DrawRectangle(x, y, widthOfSmall, heightOfSmall, r.RED);

    r.EndDrawing();
}
r.CloseWindow();
