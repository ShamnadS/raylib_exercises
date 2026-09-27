
const r = require("raylib");

let scanner1Direction;
let scanner2Direction;

function LeftToRight(x, scannerWidth, SCREENWIDTH) {

  if (x + scannerWidth >= SCREENWIDTH / 2) {
    scanner1Direction = -2;
  }
  else if (x <= 0) {
    scanner1Direction = 2;
  }
  return x += scanner1Direction;

}
function RightToLeft(x, scannerWidth, SCREENWIDTH) {

  if (x + scannerWidth >= SCREENWIDTH) {
    scanner2Direction = -1;
  }
  else if (x <= SCREENWIDTH / 2) {
    scanner2Direction = 1;
  }
  return x += scanner2Direction;

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
  LeftToRight,
  RightToLeft,
  isParticleDetected,
  checkIntersection,
}