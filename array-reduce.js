const array = [1,2,3,4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer)); // Menambahkan semua data yang ada pada array
console.log(array.reduce(reducer, 5)); // Menambahakan data yang ada pada array ditambahkan 5
