// Description: This file contains code for the maths operations
// using old school methods.
// author: Ayush @abhople1902


/**
 * Splitting the primary number into arrays
 * @param {Number} num1
 * @returns {Array} pri
 */
function PrimarySplitter(num1) {
    var pri = new Array();
    pri = String(num1).split("").map((num1) => {
        return Number(num1)
    })
    return pri
}

/**
 * Splitting the secondary number into arrays
 * @param {Number} num2
 * @returns {Array} sec
 */
function SecondarySplitter(num2) {
    var sec = new Array();
    sec = String(num2).split("").map((num2) => {
        return Number(num2)
    })
    return sec
}
























/**
 * Main function for addition
 * @param {Array} primary
 * @param {Array} secondary
 * @returns {Array} result -
 */
function Adder(primary, secondary) {
    let result = new Array()
    var carry = 0

    let l4 = 0
    let l1 = primary.length  //length of primary
    let l2 = secondary.length     //length of secondary
    let l3 = Math.abs(l1 - l2)      //difference in length
    let index = 0
    if (primary.length > secondary.length) {
        while (index < l3) {
            secondary.unshift(0);    //adding zeros to the secondary array
            index++
        }
    } else {
        while (index < l3) {
            primary.unshift(0);     //adding zeros to the primary array
            index++
        }
    }
    primary.reverse()
    secondary.reverse()

    //checking which length is greater in order to iterate with that counter
    if (l1 > l2) {
        l4 = l1
    } else {
        l4 = l2
    }

    //after reversing the arrays, adding each number to the other in iterations
    for (let index = 0; index < l4; index++) {
        var temp = primary[index] + secondary[index] + carry
        if (temp >= 10) {
            result.push(temp % 10)
            carry = Math.floor(temp / 10)
        } else {
            result.push(temp % 10)
            carry = 0
        }
    }
    if (carry > 0) {
        result.push(carry)     //pushing the last carry if it exists
    }
    result.reverse()        //reversing the result array
    return result
}
















/**
 * Main function for subtraction
 * @param {Array} primary
 * @param {Array} secondary
 * @returns {Array} result1
 */
function Sub(primary, secondary) {

    let redFlag = MagnitudeChecker(primary, secondary)  //checking which number is greater

    //Bringing back the original a state of arrays after addition
    if (redFlag == 1) {
        primary.reverse()
        primary.pop()
        primary.reverse()
        // secondary.reverse()
    } else {
        secondary.reverse()
        secondary.pop()
        primary.reverse()
        secondary.reverse()
    }

    let result1 = new Array()

    let temparray = new Array()

    let l4 = 0
    let l1 = primary.length
    let l2 = secondary.length
    let l3 = Math.abs(l1 - l2)
    let index = 0, flag = 0


    if (primary.length < secondary.length) {
        while (index < l3) {
            primary.unshift(0); //adding zeros to the primary array
            index++
        }
    } else {
        while (index < l3) {
            secondary.unshift(0);  //adding zeros to the secondary array
            index++
        }
    }


    if (l1 > l2) {
        l4 = l1
    } else {
        l4 = l2
    }

    let primaryNum = parseInt(primary.join(''));      //Checking the magnitude by joining the arrays
    let secondaryNum = parseInt(secondary.join(''));  //Checking the magnitude by joining the arrays

    primary.reverse()
    secondary.reverse()

    //The above joined arrays are compared and changes are made to primary
    //and secondary accordingly
    if (primaryNum < secondaryNum) {
        temparray = primary
        primary = secondary
        secondary = temparray
        flag = 1
    }

    /** main engine to subtract while iterating and borrowing from neighbours
    * if the neighbor is non-zero, it borrows directly and subtracts 1 from it
    * if the neighbor is zero, it borrows from the next non-zero number and makes the zero 9
    * the neighbor zero case is coupled with while loop to check for multiple zeros in a row
    * until a non zero number occurs
    */
    for (let index = 0; index < l4; index++) {
        let tempindex = index
        if (primary[index] < secondary[index]) {
            primary[index] += 10
            result1.push(primary[index] - secondary[index])
            if (index + 1 == l4) {
                break
            } else {
                if (primary[index + 1] == 0) {
                    let temp2 = index + 1
                    while (primary[temp2] == 0) {
                        primary[temp2] = 9
                        temp2++
                    }
                    primary[temp2] -= 1
                } else {
                    primary[index + 1] -= 1
                }
            }
        } else {
            result1.push(primary[index] - secondary[index])
        }
        index = tempindex
    }

    if (flag == 0) {
        return result1.reverse()
    } else {
        result1.push("-")       //adding the negative sign if the result is negative
        return result1.reverse()
    }
}


















/**
 * Main function of multiplication
 * @param {Array} primary
 * @param {Array} secondary
 * @returns {Array} finalresult
 * @prints {Array} part1
 * @prints {Array} part2
 */
function Multiplier(primary, secondary) {

    primary.reverse()
    secondary.reverse()
    let temparray = new Array()
    let redFlag = MagnitudeChecker(primary, secondary)
    if(redFlag) {
        temparray = primary
        primary = secondary
        secondary = temparray
    }

    primary.reverse()
    secondary.reverse()

    var carry = 0
    let result1 = new Array()

    // main engine to multiply the numbers
    /*The function Multiplier creates a closure over the variables primary, 
    secondary, carry, and result1. These variables are accessible within the 
    function and any nested functions.
    Inside the Multiplier function, a forEach loop is used to iterate over each 
    element of the secondary array. For each element x in secondary, another 
    forEach loop is used to iterate over each element y in the primary array.
    */
    secondary.slice().forEach(x => {
        primary.slice().forEach(y => {
            var temp = x * y + carry
            if (temp >= 10) {
                result1.push(temp % 10)
                carry = Math.floor(temp / 10)
            } else {
                result1.push(temp % 10)
                carry = 0
            }
        })
        if (carry > 0) {
            result1.push(carry)
        }
        result1.push(" ")
        carry = 0
    })

    var part1 = result1.splice(0, result1.indexOf(" "))
    result1.splice(0, 1);
    part1.reverse();

    var part2 = result1.splice(0, result1.indexOf(" "))
    result1.splice(0, 1);


    //adding the mandatory zero in part2 and reversing it
    part2.reverse()
    part2.push(0)

    console.log("The two parts of multiplication are : ")
    console.log(part1)
    console.log(part2)

    let finalresult = new Array()
    finalresult = Adder(part1, part2)


    return finalresult

}













/**
 * 
 * @param {Array} primary 
 * @param {Array} secondary 
 * @returns Number - This is the flag that will indicate if primary is greater
 * or not
 */
function MagnitudeChecker(primary, secondary) {
    primary.reverse()
    secondary.reverse()
    let primaryNum = parseInt(primary.join(''));
    let secondaryNum = parseInt(secondary.join(''));

    let flag = 0

    if (primaryNum < secondaryNum) {
        flag = 1
    }
    return flag
}









/////////////////////////////////////////////////////////////////////////////
//Testing

let num1 = 102
let num2 = 12

let pri = PrimarySplitter(num1)
let sec = SecondarySplitter(num2)

let AdditionResult = new Array()
AdditionResult = Adder(pri, sec)
console.log("The addition is : ")
console.log(AdditionResult)


let SubtractionResult = new Array()
SubtractionResult = Sub(pri, sec)
console.log("The subtraction is : ")
console.log(SubtractionResult)


pri = PrimarySplitter(num1)
sec = SecondarySplitter(num2)
let MultiplicationResult = new Array()
console.log("Before call")
console.log(pri)
console.log(sec)
MultiplicationResult = Multiplier(pri, sec)
console.log("The multiplication is : ")
console.log(MultiplicationResult)







// Function to format the operation
/**
 * prints the operation
 */
// function displayOperation() {
//     let cnt = primary.length - 1
//     while(cnt >= 0){
//         console.log(primary[cnt])
//         cnt--
//     }
//     console.log("\n")
//     let cnt2 = secondary.length - 1
//     while(cnt2 >= 0){
//         console.log(secondary[cnt2])
//         cnt2--
//     }
// }

// displayOperation()
