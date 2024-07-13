// Activity 1: Variable Declaration
// task 1
var Age = 19;
console.log(Age);

// task 2
let username = "vinay kumar";
console.log(username);

// Activity 2: Constant Declaration
// task 3
const IsLogin = true;
console.log(IsLogin);

// Activity 3: Data Types
// task 4

let num = 69;
console.log(typeof num);

let language = "javascript";
console.log(typeof language);

let IsusingVsCode = true;
console.log(typeof IsusingVsCode);

let user = {
  nama: "vinay",
  age: 19,
  IsLogin: false,
};
console.log(typeof user);

let superhero = ["ironman", "batman", "superman", "captain america"];
console.log(typeof superhero);

// Activity 4: Reassigning Variables
// task 5

let days = 5;
console.log(`days org : ${days}  `);
days = 4;
console.log(`days reassign : ${days}  `);

// Activity 5: Understanding const
IsLogin = false;

// the error
/*
IsLogin = false;
        ^

TypeError: Assignment to constant variable.
*/

console.log(IsLogin);

// Feature Request:
/* 1 Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the
console. */

let name1 = "vinay";
console.log(`string  ${name1}`);
console.log(`string typeof ${typeof name1}`);

let age1 = 18;
console.log(`number  ${age1}`);
console.log(`number typeof ${typeof age1}`);

let isLoggedIn = true;
console.log(`boolean  ${isLoggedIn}`);
console.log(`boolean typeof ${typeof isLoggedIn}`);

let isnull = null;
console.log(`null  ${isnull}`);
console.log(`null typeof ${typeof isnull}`);

let isUndefined;
console.log(`undefined  ${isUndefined}`);
console.log(`undefined typeof ${typeof isUndefined}`);
let x = BigInt("123456789012345678901234567890");

console.log(`bigint  ${x}`);
console.log(`bigint typeof ${typeof x}`);

const sym2 = Symbol();

console.log(sym2);
console.log(`symbol typeof ${typeof sym2}`);

let user2 = {
  nama: "vinay",
  age: 19,
  IsLogin: false,
};
console.log(`object  ${user2}`);
console.log(`object typeof ${typeof user2}`);

let arr = [1, 2, 3, 4];
console.log(`array  ${arr}`);
console.log(`array typeof ${typeof arr}`);

function func() {}

console.log(`function  ${func()}`);
console.log(`function typeof ${typeof func()}`);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let views = 5445;
console.log(`views org : ${views}  `);
views = 4514;
console.log(`views reassign : ${views}  `);

// in let you can change the value of any daty type of with let keyword with scope


const totaltask = 5445;
console.log(`totaltask org : ${totaltask}  `);
totaltask = 4514;
console.log(`totaltask reassign : ${totaltask}  `);


// in let you can't change the value of any daty type of with const keyword with scope
