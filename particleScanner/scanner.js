let scannerDirection;
const r = require("raylib");

function direction(x, scannerWidth, SCREENWIDTH) {
  if (x + scannerWidth >= SCREENWIDTH) {
    scannerDirection = -2;
  }
  else if (x <= 0) {
    scannerDirection = 2;
  }
  return x += scannerDirection;

}

function isParticleDetected(scannerX, scannerWidth, particleX, particleWidth) {
  if (scannerX + scannerWidth >= particleX && scannerX <= particleX + particleWidth) {
    return true;
  }
  else {
    return false;
  }
}

function checkIntersection(particle1, particle2) {
  if (particle1 || particle2) {
    return r.RED;
  }
  else {
    return r.WHITE;
  }
}

module.exports = {
  direction,
  isParticleDetected,
  checkIntersection,
}