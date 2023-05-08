let add7 = (a) => a + 7;

function multiply (a,b) {
    return a * b
}

function capitalize(word) {
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
}

let lastLetter = function(word) {
    let longueur = word.length;
    return word.charAt(longueur - 1);
};