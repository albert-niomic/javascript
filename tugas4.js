var budi = 162;
var andi = 150;
var salsa = 155;

if (budi > andi && budi > salsa){
  console.log("Tinggi badan tertinggi Budi");
  console.log(budi);
  if (andi > salsa){
    console.log(andi);
    console.log(salsa);
  } else{
    console.log(salsa);
    console.log(andi);
  }
} else if ( andi > budi && andi > salsa){
  console.log("Tinggi badan tertinggi Andi");
  console.log(andi);
  if (budi > salsa){
    console.log(budi);
    console.log(salsa);
  } else{
    console.log(salsa);
    console.log(budi);
  }
} else if (salsa > andi && salsa > budi) {
  console.log("Tinggi badan tertinggi Salsa");
  console.log(salsa);
  if (salsa > andi){
    console.log(salsa);
    console.log(andi);
  } else{
    console.log(andi);
    console.log(salsa);
  }
}
