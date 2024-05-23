// Arrow Function:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumNumbers = (array) => {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}

console.log(sumNumbers(array));