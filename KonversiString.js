function konversi(){
  var kata = new String("Belajar Kuy...");
  console.log(typeof kata);
  console.log(kata);

  var konversi = kata.toString();
  console.log(typeof kata);
  console.log(kata);

  var konversi2 = kata.valueOf();
  console.log(typeof konversi2);
  console.log(konversi2);
}

konversi()
