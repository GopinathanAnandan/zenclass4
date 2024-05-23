//anonymous function:

const array = [1, 2, 63, 41, 5, 6, 73, 8, 9, 11];

const logic = function(num) {
    if (num < 2) return false; 
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false; 
        }
    }
    return true; 
}
const primeNumbers = function(array) {
    let prime = [];
    for (let i = 0; i < array.length; i++) {
        if (logic(array[i])) {
            prime.push(array[i]);
        }
    }
    return prime;
}
console.log(primeNumbers(array));

//IIFE(immediately invoked function expression):

const primeNumber = (function(array) {
    let prime = [];
    const check = function(num) {
        if (num < 2) return false; 
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                return false; 
            }
        }
        return true; 
    }
    for (let i = 0; i < array.length; i++) {
        if (check(array[i])) {
            prime.push(array[i]);
        }
    }
    return prime;
})(array);

console.log(primeNumber);