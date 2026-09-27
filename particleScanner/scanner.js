
const r = require("raylib");

let scanner1Direction;
let scanner2Direction;
let scanner3Direction;

function leftToRight(x, scannerWidth, SCREENWIDTH) {
  if (x + scannerWidth >= SCREENWIDTH / 2) {
    scanner1Direction = -2;
  }
  else if (x <= 0) {
    scanner1Direction = 2;
  }
  return x += scanner1Direction;
}

function rightToLeft(x, scannerWidth, SCREENWIDTH) {
  if (x + scannerWidth >= SCREENWIDTH) {
    scanner2Direction = -1;
  }
  else if (x <= SCREENWIDTH / 2) {
    scanner2Direction = 1;
  }
  return x += scanner2Direction;
}

function topToBottom(y, scannerHeight, SCREENHEIGHT) {
  if (y + scannerHeight >= SCREENHEIGHT) {
    scanner3Direction = -2;
  }
  else if (y <= 0) {
    scanner3Direction = 2;
  }
  return y += scanner3Direction;
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
  leftToRight,
  rightToLeft,
  topToBottom,
  isParticleDetected,
  checkIntersection,
}