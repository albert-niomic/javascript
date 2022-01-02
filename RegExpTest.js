function panggilRegExp(){
  let data = "Belajar Satu Tahun Bersama Niomic";

  console.log(/Satu/.test(data));
  console.log(/satu/.test(data));
  console.log(/satu/i.test(data));
}

panggilRegExp();
