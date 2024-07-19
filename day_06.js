// Activity 1 : Array Creation and Access
// task 1

let task1Arr = [1, 2, 3, 4, 5];
console.log(task1Arr);

// task 2
console.log(`first element ${task1Arr[0]}`);
console.log(`last element ${task1Arr[4]}`);

// task 3
task1Arr.push(6);
console.log(`push method ${task1Arr}`);

// task 4
task1Arr.pop();
console.log(`pop method ${task1Arr}`);

// task 5
task1Arr.shift();
console.log(`shift method ${task1Arr}`);
task1Arr.unshift(1);

// task 6
console.log(`unshift method ${task1Arr}`);

// task 7
let mapArr = task1Arr.map((num) => {
  return num * 2;
});

console.log(`map new Array = ${mapArr}`);
console.log(`map prev Array = ${task1Arr}`);

// task 8
let filterArr = task1Arr.filter((num) => {
  return num % 2 === 0;
});

console.log(`filter new Array = ${filterArr}`);
console.log(`filter prev Array = ${task1Arr}`);

// task 9
let reduceArr = task1Arr.reduce((acc, currValue) => {
  return (acc += currValue);
});

console.log(`reduce new Array = ${reduceArr}`);
console.log(`reduce prev Array = ${task1Arr}`);

// task 10

for (let i = 0; i < task1Arr.length; i++) {
  console.log(`use for loop method ${task1Arr[i]}`);
}

// task 11

task1Arr.forEach((value) => {
  console.log(`use forEach method ${value}`);
});

// task 12
const matrixArr = [
  [1, 2],
  [3, 4],
];

console.log(`Matrix`);
console.log(matrixArr);


// task 13

console.log(matrixArr[1][1]);