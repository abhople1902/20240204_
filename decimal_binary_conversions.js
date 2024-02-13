
/**
 * To get the 2's compliment of the number
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


/**
 * To convert binary into decimal
 * @param {Array<Number>} binaryRepresentation The number in Binary
 * @returns {Number} The Decimal format of the number
 * @throws {TypeError} when the array is not of 0s and 1s
 */
function convertBinaryToDecimal(binaryRepresentation) {
  let decimalNumber = 0
  for (let index = 0; index < binaryRepresentation.length; index++) {
      if (binaryRepresentation[index] === 1) {
          decimalNumber += Math.pow(2, binaryRepresentation.length - index - 1)
      }
      else if (binaryRepresentation[index] !== 0) {
          throw new TypeError("The array should only contain 0s and 1s.")
      }
  }
  return decimalNumber
}



/**
 * Converts a number's JavaScript's binary representation into it's Decimal,
 * Human readable counterpart
 * @param {Array<Number>} jsRepresentation - The JS representation
 * @returns {Number} - The decimal representation
 */
function getNumberFromJSRepresentation(jsRepresentation) {
  // Taking the signbit out first
  const signBit = jsRepresentation[0]

  // The next 11 bits should be the Exponent
  const binaryExponent = []
  for (let i = 1; i < 12; i++) {
      binaryExponent.push(jsRepresentation[i])
  }

  // From 13, the rest of the array is Mantissa.
  const binaryMantissa = []
  for (let i = 13; i < jsRepresentation.length; i++) {
      binaryMantissa.push(jsRepresentation[i])
  }


  const decimalExponent = getDecimalFrom2sCompliment(binaryExponent, true)
  const decimalMantissa = getDecimalFrom2sCompliment(binaryMantissa, false)

  const decimalRepresentation = Math.pow(-1, signBit) * decimalMantissa * Math.pow(2, decimalExponent)

  return decimalRepresentation
}






function getJSNumberRepresentation(Number) {
    return getSimple2sComplement(Number);
}

let a = getJSNumberRepresentation(-5) // 1111 1011
console.log(a)
