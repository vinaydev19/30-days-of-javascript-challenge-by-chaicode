// task 1

function factorialnum(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialnum(n - 1);
}

// console.log(factorialnum(5));

// task 2
function Fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  return Fibonacci(num - 1) + Fibonacci(num - 2);
}
// console.log(Fibonacci(5))
// console.log(Fibonacci(10))
// console.log(Fibonacci(15))
// console.log(Fibonacci(5))

// task 3
function arraysum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraysum(arr.slice(1));
}

// console.log(arraysum([1, 2, 3, 4, 5]));
// console.log(arraysum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// task 4

function getMaxNum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const MaxNum = getMaxNum(arr.slice(1));
  return MaxNum < arr[0] ? arr[0] : MaxNum;
}
console.log(getMaxNum([1, 25, 95, 10, 56, 45, 50]));

// task 5
function reversString(str) {
  if (str === "") {
    return "";
  }
  return reversString(str.substr(1)) + str.charAt(0);
}

console.log(reversString("vinay"))
