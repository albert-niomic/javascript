function panggilRegExp(value){
  //Mengambil semua karakter kecuali spasi
  var ambilData = value.match(/\w/g);
  console.log(ambilData);

  //Untuk mengambil semua karakter kecuali huruf dan angka
  var ambilData = value.match(/\W/g);
  console.log(ambilData);

// MEngambil semua angka
  var ambilData = value.match(/\d/g);
  console.log(ambilData);

  //Mengambil Semua Karakter Kecuali angka
  var ambilData = value.match(/\D/g);
  console.log(ambilData);

  //Mengambil semua spasi
  var ambilData = value.match(/\s/g);
  console.log(ambilData);
  console.log("Banyaknya Spasi : ", ambilData.length);

  // Mengambil Semua Karakter Kecuali spasi
  var ambilData = value.match(/\S/g);
  console.log(ambilData);
}

panggilRegExp("Bulan ke 1 sd ke 4")
