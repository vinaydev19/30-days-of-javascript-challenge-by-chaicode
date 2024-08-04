// task 1

function evenOld(num) {
  if (num % 2 == 0) {
    console.log(`it is even number`);
  } else {
    console.log(`it is old number`);
  }
}

evenOld(6);

// task 2

function square(num) {
  return num * num;
}

console.log(square(12));

// task 3

const max = function (num1, num2) {
  if (num1 > num2) {
    return `${num1} is maximum`;
  } else {
    return `${num2} is maximum`;
  }
};

let maximumNumber = max(50, 100);
console.log(maximumNumber);

// task 4

let strcon = function (str1, str2) {
  return str1.concat(str2);
};

console.log(strcon("viany", "kumar"));

// task 5

sumofnum = (num1, num2) => {
  return num1 + num2;
};

console.log(sumofnum(5, 5));

// task 6

findchar = (str, findchar) => {
  let find = str.includes(findchar);
  return find;
};

console.log(findchar("vinay", "d"));

// task 7

function product(num1, num2 = 50) {
  return num1 * num2;
}
console.log(product(50, 60));
console.log(product(50));

// task 8

function greetingmessage(name, age = 19) {
  let message = `HBD TO YOU ${name}, NOW YOUR ${age}`;
  return message;
}

console.log(greetingmessage("vinay", 20));

// task 9

function manytime(func, times) {
  for (let i = 1; i <= times; i++) {
    func();
  }
}

function sayhello() {
  console.log("hello");
}

manytime(sayhello, 5);

// task 10

function hofunc(func1, func2, value) {
  return func2(func1(value));
}

function add(x) {
  return x + 2;
}

function muilp(x) {
  return x * 5;
}

console.log(hofunc(add, muilp, 5));
