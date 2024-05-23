const logic = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

const titleCap = function(stringArray) {
    return stringArray.map(logic);
}

console.log(titleCap(["MOBILE", "SOFTware", "system", "cOmPuTeR"]));