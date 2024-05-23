
//anonymous function:

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const OddNumbers = function (array) {
  const Numbers = []; 
  for (const element of array) {
    if (element % 2 !== 0) {
        Numbers.push(element); 
    }
  }
  return Numbers; 
}

console.log(OddNumbers(array)); 

//IIFE(immediately invoked function expression):

const result = (function (array) {
    const oddNumbers = []; 
    for (const element of array) {
      if (element % 2 !== 0) {
        oddNumbers.push(element);
      }
    }
    return oddNumbers;
  })(array);
  
  console.log(result);
  