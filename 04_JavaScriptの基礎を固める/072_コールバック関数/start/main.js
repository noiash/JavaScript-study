// function hello(callback, lastname) {
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'Code Mafia';
// }

// const getFirstName = function() {
//   return 'Code';
// }

// hello(function(name) {
//   return 'Code' + name;
// }, 'Mafia');

function doSomethibg(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomethibg(2, 2, multiply);
doSomethibg(2, 3, plus);