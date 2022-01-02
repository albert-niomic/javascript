let products = [
  {name : "Aplle", type : "fruit"},
  {name : "Monitor", type : "computer"},
  {name : "mango", type : "furniture"},
  {name : "Table", type : "furniture"}
];

console.log(products.every(product=>product.type == "fruit"));


//hasil yang ditampilkan akan false karena dalam object product tidak hanya terdapat fruit saja
