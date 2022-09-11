function fizzBuzzFirst() {
  const forLoopArray = [];
  for (let i = 0; i < 99; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      forLoopArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      forLoopArray.push('Fizz');
    } else if (i % 5 === 0) {
      forLoopArray.push('Buzz');
    } else {
      forLoopArray.push(i);
    }
  }
  console.log(forLoopArray);
}
fizzBuzzFirst();

const arrNum = [];
for (let i = 0; i < 100; i++) {
  arrNum.push(i);
}
console.log(arrNum);

const fizzBuzz = (array) => {
  const returnValue = array.map((el) => {
    return el % 3 === 0 && el % 5 === 0
      ? 'FizzBuzz'
      : el % 3 === 0
      ? 'Fizz'
      : el % 5 === 0
      ? 'Buzz'
      : el;
  });

  return returnValue;
};

console.log(fizzBuzz(arrNum));
