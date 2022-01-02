function panggilBilangan(){
  var bilanganGenap = [];
  var bilanganGanjil = [];
  for(i=1; i<=10; i++){
    if(i%2 === 0){
      bilanganGenap.push(i);
    } else if (i%2 !== 0){
      bilanganGanjil.push(i)
    }

  }
  console.log(bilanganGanjil);
  return bilanganGenap;

}

console.log(panggilBilangan());
