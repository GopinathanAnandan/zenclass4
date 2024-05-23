//anonymous function:

let array = [1, 2, 3, 4, 5];
let k = 3;

const rotateArray = function (array, k) {
    for (let i = 0; i < k; i++) {
        const temp = array.pop();
        array.unshift(temp);
    }   
    return array;   
}

console.log(rotateArray(array,k));

//IIFE(immediately invoked function expression):

let array1 = [1, 2, 3, 4, 5];

const rotateArrays = (function (array1, k) {
    for (let i = 0; i < k; i++) {
        const temp = array1.pop();
        array1.unshift(temp);
    }   
    return array1;   
})(array1, k);

console.log(rotateArrays);
