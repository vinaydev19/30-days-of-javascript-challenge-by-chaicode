// Activity 1: If-Else Statements
// task 1

let num = -5;
if (num > 0) {
  console.log(`the number is positive : ${num}`);
} else if (num < 0) {
  console.log(`the number is negative : ${num}`);
} else {
  console.log(`the number is zero : ${num}`);
}

// task 2
let age = 8;
if (age >= 18) {
  console.log(`your are eligible to vote ${age}`);
} else {
  console.log(`your are not eligible to vote ${age}`);
}

// Activity 2: Nested If-Else Statements

let num1 = 5525;
let num2 = 855;
let num3 = 655;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`largest number is ${num1}`);
  }else{
    console.log(`largest number is ${num3}`);
  }
}else if(num2>num3){
    console.log(`largest number is ${num2}`);
}else{
    console.log(`largest number is ${num3}`);
}

// Activity 3: Switch Case
// task 4
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday ");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("the day is not exist");
    break;
}

// task 5
let GradeScore = 76;
switch (true) {
  case GradeScore >= 90:
    console.log(`the grade is A of Grade Score ${GradeScore}`);
    break;
  case GradeScore >= 75:
    console.log(`the grade is B of Grade Score ${GradeScore}`);
    break;
  case GradeScore >= 50:
    console.log(`the grade is C of Grade Score ${GradeScore}`);
    break;
  case GradeScore >= 35:
    console.log(`the grade is D of Grade Score ${GradeScore}`);
    break;
  case GradeScore < 35:
    console.log(`the grade is F of Grade Score ${GradeScore}`);
    break;

  default:
    console.log(`enter vaild grade score`);
    break;
}

// Activity 4: Conditional (Ternary) Operator
// task 6

let num5 = 11;
let result = num5 % 2 == 0 ? "Even" : "odd";
console.log(result);

// Activity 5: Combining Conditions
// task 7

let year = 2012;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`this is leap year`);
} else {
  console.log(`this is not leap year`);
}
