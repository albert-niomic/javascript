function panggilObject(){
  var mobil = {
    type : 'Sedan'
    ,harga : 10000
    ,warna : 'putih'
    ,tahun :[2000,2001,2002]
  }
  mobil.diskon = 500;
  mobil.harga = 20000;

  console.log(mobil)
  console.log(mobil.harga)
  console.log(mobil.tahun)
  console.log(mobil.tahun[1])
}

panggilObject()
