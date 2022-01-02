function nestedObject(){
  var mahasiswa = {
    nama : "Ilham",
    ipk : {
      semester1 : 3.5
      ,semester2 : 3.75
      ,semester3 : 4
    }
  }
  console.log(mahasiswa.ipk.semester1);
}
nestedObject()
