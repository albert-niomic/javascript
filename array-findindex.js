var array = [2,4,3,6,2,4,10,15];

function isLargeNumber(element){
  return element > 13;
}

console.log(array.findIndex(isLargeNumber));
