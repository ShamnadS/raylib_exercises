const r = require("raylib");


function scannerOutOfBound(start, end1, lowerBound, UpperBound, scannerVelocity) {
  return end1 > UpperBound || start < lowerBound ? -scannerVelocity : scannerVelocity;
}

function changeDirection(start, velocity) {
  return start += velocity;
}

function isParticleDetected(start1, end1, particle1Start, particle1End, particle2Start, particle2End) {
  return end1 >= particle1Start && start1 <= particle1End || end1 >= particle2Start && start1 <= particle2End ? r.RED : r.WHITE;
}

module.exports = {

  changeDirection,
  scannerOutOfBound,
  isParticleDetected,

};
