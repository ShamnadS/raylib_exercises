const r = require("raylib");

function createParticle(particleX, particleY, SCREENHEIGHT, particleWidth) {
    const color = r.SKYBLUE;
    r.DrawRectangle(particleX, particleY, particleWidth, SCREENHEIGHT, color);
}

module.exports = {
    createParticle,
}