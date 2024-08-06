// function outer() {
//   let outerva = 15;
//   function inner() {
//     console.log(outerva);
//   }
//   inner();
// }

// outer();

// function counter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     getcount: function () {
//       return count;
//     },
//   };
// }

// let counterouter = counter();
// console.log(counterouter.increment());
// console.log(counterouter.increment());
// console.log(counterouter.increment());
// console.log(counterouter.getcount());

// function uniqueid() {
//   let lastid = 0;

//   return function () {
//     lastid += 1;
//     return `ID_${lastid}`;
//   };
// }

// const generateid = uniqueid();
// console.log(generateid());
// console.log(generateid());
// console.log(generateid());
// console.log(generateid());

// // task 4

// function task4(name) {
//   return function () {
//     return `hey ${name}`;
//   };
// }

// const sayname = task4("vinay");
// console.log(sayname());

// // task 5
// function createFuncArray() {
//   functionArray = [];
//   for (let i = 0; i < 5; i++) {
//     functionArray.push(
//       (function (index) {
//         return function () {
//           console.log(index);
//         };
//       })(i)
//     );
//   }

//   functionArray[0]();
//   functionArray[1]();
//   functionArray[2]();
//   functionArray[3]();
//   functionArray[4]();
// }

// createFuncArray();

// // task 6

// function modulePattern() {
//   let items = [];

//   function additems(item) {
//     items.push(item);
//   }

//   function removeitems(item) {
//     const index = items.indexOf(item);
//     if (index > -1) {
//       items.splice(index, 1);
//     }
//   }

//   function listitems() {
//     return items.slice();
//   }

//   additems("day1");
//   console.log(items);

//   additems("day2");
//   console.log(items);

//   additems("day3");
//   console.log(items);

//   removeitems("day2");
//   console.log(items);

//   listitems();
//   console.log(items);
// }

// modulePattern();



// task 7

// function calu(n){
//   let sum = 0;
//   for(let i = 0; i<=n;i++){
//     sum+=i
//   }
//   return sum
// }


// const Memoize= (fuc)=>{
//   let cache = {}
//   return function(...args){
//     let n = args[0]
//     if(cache[n] !== undefined){
//       console.log('from cache');
      
//       return cache[n]
//     }else{
//       console.log('run first time');
//       let result = fuc(n)
//       cache[n] = result
//       return result
//     }
//   }
// }

// console.time()
// let effmemoize = Memoize(calu)
// console.log(effmemoize(5));
// console.timeEnd()
// console.time()
// console.log(effmemoize(5));
// console.timeEnd()

// task 8

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


const factorialMemoize = (fun)=>{
  let cache = {}
  return function(...args){
    let n = args[0]
    if(cache[n] !== undefined){
      console.log('from cache');
      return cache[n]
    }else{
      console.log('first time');
      
      let result = fun(n)

      cache[n] = result
      return result
    }
  }
}

console.time()
let efffactorialMemoize = factorialMemoize(factorial)
console.log(efffactorialMemoize(6));
console.timeEnd()
console.time()
console.log(efffactorialMemoize(6));

console.timeEnd()