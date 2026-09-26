let scannerDirection;

function direction(x, scannerWidth, SCREENWIDTH) {
  if (x + scannerWidth >= SCREENWIDTH) {
    scannerDirection = -1;
  }
  else if (x <= 0) {
    scannerDirection = 1;
  }
  return x += scannerDirection;

}

module.exports = {
  direction,
}