let scannerDirection;

function direction(x, scannerWidth, SCREENWIDTH) {
  if (x + scannerWidth >= SCREENWIDTH) {
    scannerDirection = -2;
  }
  else if (x <= 0) {
    scannerDirection = 2;
  }
  return x += scannerDirection;

}

module.exports = {
  direction,
}