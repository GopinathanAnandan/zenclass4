const array = ["hello", "level", "world", "radar", "apple", "mom", "madam"];

const palindrome = function(array){
    let result = [];
    for(let word of array){
        let inversion = word.split('').reverse().join('');
        if(word === inversion){
            result.push(word);
        }
    }
    return result;
}
console.log(palindrome(array));