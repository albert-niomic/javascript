function panggilRegExp(){
  let data = "Belajar Satu tahun Bersama Niomic";
  let str = new RegExp("Niomic");

  console.log(str.exec(data));
}

panggilRegExp()
