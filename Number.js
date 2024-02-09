
/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function getSimple2sComplement(num1, num2) {
    if (num1 === 0) return '0'; // Special case for zero

    let binary = '';

    if(num1*(-1) > 0) {
        num1 = num1 * (-1);
        num1 -= 1;
    }

    while (num1 > 0) {
        binary = (num1 % 2) + binary;
        num1 = Math.floor(num1 / 2);
    }
    return binary;

}

function getJSNumberRepresentation(Number) {
    return getSimple2sComplement(Number);
}

let a = getJSNumberRepresentation(-5) // 1111 1011
console.log(a)
