function panggilPop(){
  var kota = ['jakarta', 'Bandung', 'Surabaya', 'Malang'];
  console.log(kota);
  console.log("=====");
  // kota = kota.shift();
  var kota2 = kota.pop();
  console.log(kota2);

  return kota;
}

console.log(panggilPop());
// Menghapus data pada index terakhir array data
