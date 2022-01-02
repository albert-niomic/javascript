let products = [
  {name : "Aplle", type : "fruit"},
  {name : "Monitor", type : "computer"},
  {name : "mango", type : "furniture"},
  {name : "Table", type : "furniture"}
];

console.log(products.some(product=>product.type === "fruit"));

//Hasil ayng ditampilkan adalah true karena di dalam object sudah terdapat 1 type fruit
