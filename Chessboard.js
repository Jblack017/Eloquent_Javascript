// Write a program that creates a string that represents an 8x8 grid,
// using new line characters to seperate lines. 
// at each position of the grid there is either a space or a # character.
// The characters should form a chessboard.
// Passing the string to console log should show this
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 


// es6 function declaration that creates a functions which takes in a size and console.logs a final string.
const chessboard = (size) => {

    // initialize the first pattern of characters
    let charArray = []

    // initialize bucket to hold stacked character patterns
    let stackedCharArray = []

    // build first arrray of characters
    for (let i = 0; i < size; i++) {
        i % 2 !== 0 ? charArray.push("#") : charArray.push(" ")
    }

    // build stacked array of modified character arrays
    for (let j = 0; j < size; j++) {

        // make sure to not add a "\n" on final spread of charArray
        if (j === size - 1) {
            stackedCharArray = [...stackedCharArray, ...charArray.reverse()]
        } else {
            stackedCharArray = [...stackedCharArray, ...charArray.reverse(), "\n"]
        }
        
    }

    // console log a joined stacked char array
    console.log(stackedCharArray.join(''))
}


// invoke function, passing in desired size
chessboard(8)