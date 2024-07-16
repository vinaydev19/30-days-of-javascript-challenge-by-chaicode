// Activity 1: For Loop

// task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// task 2
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// task 3

let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}

console.log(sum);

// task 4

let num1 = 10;
while (num1 >= 1) {
  console.log(num1);
  num1--;
}

// task 5
// console.log('dfsja');

let num2 = 1;
do {
  console.log(num2);
  num2++;
} while (num2 <= 5);

// task 6

let fact = 5;
let factres = 1;

do {
  factres = factres * fact;
  fact--;
} while (fact >= 1);

console.log('Factorial : ', factres);

// task 7

let pattern = "";

for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// task 8

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
