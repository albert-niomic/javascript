function panggilforEach(){
  var data = ['a','b','c','d','e','f','g'];
  data.forEach(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

panggilforEach()

function PanggilPerintahMap(){
  var kota = ['Jakarta','Balikpapan','Medan'];
  kota.map(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  });
}


PanggilPerintahMap()
