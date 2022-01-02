function panggilRegExp(value){
  var ambilData = value.match(/ke/g);
  console.log(ambilData);
  var ambilData = value.match(/ke/);
  console.log(ambilData);
}

panggilRegExp("Bulan ke 1 sd ke 4")
