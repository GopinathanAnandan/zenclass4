//anonymous function:

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];


const medianArrays = function (array1, array2) {
    const concatenatedArray = array1.concat(array2);
    const sorted = concatenatedArray.sort();
    const length = sorted.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
    } else {
        return sorted[middleIndex];
    }
};
console.log(medianArrays(array1, array2));

//IIFE(immediately invoked function expression):

const medianArray = (function (array1, array2) {
    const concatenatedArray = array1.concat(array2);
    const sorted = concatenatedArray.sort();
    const length = sorted.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
    } else {
        return sorted[middleIndex];
    }
})(array1,array2);

console.log(medianArray)