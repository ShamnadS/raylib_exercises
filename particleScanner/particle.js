const r = require("raylib");

function createParticle(particleX, particleY, particleHeight, particleWidth) {
    const color = r.SKYBLUE;
    r.DrawRectangle(particleX, particleY, particleWidth, particleHeight, color);
}

module.exports = {
    createParticle,
}