
// function sum(a, b, c) {
//   console.log(arguments);
//   console.log(arguments[0], arguments[1], arguments[2]);
// }

// sum(2, 3, 4)

// function sum (a, b, c, ...args) {
//   console.log(args);
// }

// sum(1, 2, 3, 4)

let sum = (...sumArgs) => {
  return sumArgs.reduce((prev, current) => prev + current)
}

sum(1, 2, 3)