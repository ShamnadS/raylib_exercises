function calcOffset(outer, inner, outerX) {
    return (outer - inner) / 2 + outerX;
}

module.exports = {
    calcOffset,
};
