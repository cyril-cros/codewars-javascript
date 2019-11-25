module.exports = function (str) {
    if (!str || !str.trim() || str.replace(/\s+/gm, "").length >= 140) return false;
    return "#".concat(...str.split(/\s+/gm).map(e => e.replace(/^./g, e[0].toUpperCase())));
};

