// Arrow Function:

const logic = (str) => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const titleCap = (stringArray) => stringArray.map(logic);

console.log(titleCap(["MOBILE", "SOFTware", "system", "cOmPuTeR"]));
