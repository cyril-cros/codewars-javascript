module.exports = function (number) {
  // BEGIN - ###### BLOCK ONLY TO HANDLE SNEACKY EDge CASES ########
    // ERROR Cases - If input is null
    if (!number) return "ERROR - Input is null";

    // Boundaries => From 65 = A to 90 = Z and 32 = Space as allowed char
    let arrInput = number.match(/\d{2}/gm);

    // ERROR Cases - If input doesn't contain digits
    if (arrInput.length !== number.length / 2) return "ERROR - Input length in not PAIR or doesn't contain exclusively DIGIT";

    // ERROR Cases - If split numbers not between boundaries
    if (!arrInput.every(e => {
        return ((Number(e) >= 65 && Number(e) <= 90) || Number(e) === 32);
    }))
        return "ERROR - Input contains digits couple OUTSIDE ASCII upper case boundaries";
    // END - ###### BLOCK ONLY TO HANDLE SNEACKY EDge CASES ########

    // Real Job ...
    return String.fromCharCode(...number.match(/\d{2}/gm))
};