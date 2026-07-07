// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // inner loop runs for n
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }

//    // Add a new line character after contents of each line
//    pattern += "\n";
// }
// console.log(pattern);


// 1
// 12
// 123
// 1234   
// 12345





// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner loop - I -> prints spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> prints stars
//    for (let num = 1; num <= n; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);


//     *
//    **
//   ***
//  ****
// *****




// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // print stars for n number of times in each row
//    for (let num = 1; num <= n; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

// *
// **
// ***
// ****
// *****




// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // Inner Loop - I -> prints spaces
//    for (let space = 1; space <= rows - n; space++) {
//       pattern += " ";
//    }

//    // Inner Loop - II -> prints stars
//    for (let num = 1; num <= 2 * n - 1; num++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);


//     *
//    ***
//   *****
//  *******
// *********