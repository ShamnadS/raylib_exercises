function calcOffset(outer, inner, outerX) {
    return (outer - inner) / 2 + outerX;
}

function calcDistance(x1, y1, x2, y2) {
    return (((x2 - x1) ** 2) + ((y2 - y1) ** 2) ** 0.5);
}

module.exports = {
    calcOffset,
    calcDistance,
};
