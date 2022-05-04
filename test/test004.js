var numbers = [[1,2,3],[4,5,6],[7,8,9]]; //array안에 array가 있는 경우
var newNumbers = numbers.map(array => array.map(number => number *2));
console.log(numbers[0]);
