// Arrow Function:

const array = [1, 2, 63, 41, 5, 6, 73, 8, 9, 11];

const logic = (num) => {
    if (num < 2) return false; 
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false; 
        }
    }
    return true; 
}
const primeNumbers = (array) => {
    let prime = [];
    for (const element of array) {
        if (logic(element)) {
            prime.push(element);
        }
    }
    return prime;
}
console.log(primeNumbers(array));