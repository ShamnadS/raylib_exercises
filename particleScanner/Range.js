const r = require("raylib");

function createRange(X, Y, width, height, color) {

    r.DrawRectangle(X, Y, width, height, color);
}

module.exports = {
    createRange,
}