const array =[[0,1],[2,3],[4,5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array);
