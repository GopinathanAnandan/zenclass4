const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumNumbers = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumNumbers(array));