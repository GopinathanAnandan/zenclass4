//anonymous function:

const array = [1,2,3,4,5,4,3,2,1,5];

const duplicates = function(array){
    let result=[];
    for(const number of array){
        if(!result.includes(number)){
            result.push(number);
        }
    }
    return result;
};
console.log(duplicates(array));

//IIFE(immediately invoked function expression):

const duplicate = (function(array){
    let result=[];
    for(const number of array){
        if(!result.includes(number)){
            result.push(number);
        }
    }
    return result;
})(array);

console.log(duplicate);