function panggilSlice(){
  var kota = ['Jakarta', 'Surabaya', 'Bali', 'Medan', 'Malang'];
  console.log(kota)
  kota.splice(2,0,'Palembang'); //Insert data
  //Splice(Pada Index Berapa data ingin dimasukan, Data yang ingin dihapus setelah index masukan data, data yang dimasukan)

  kota.splice(5,1); // Hapus data Malang
  //Splice(Index keberapa yang ingin dihapus, Jumlah data yang dihapus)

  return kota;
}

console.log(panggilSlice());
