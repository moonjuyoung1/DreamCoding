// default parameters
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); //'Hi! by unknown'

// rest parameters  //args는 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll("dream", "coding", "ellie");

// arrow function

const simplePrint = function () {
  console.log("print");
};

const simplePrint = () => console.log("print");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

function add(command, a, b) {
  switch (command) {
    case "add":
      console.log(a + b);
      break;
    case "substract":
      console.log(a - b);
      break;
    case "divide":
      console.log(a / b);
      break;
  }
}

add("substract", 7, 2);
