function task1() {
  try {
    console.log(datetime);
  } catch (e) {
    console.log(e, "error");
  }
}

// task1()

// task 2

// function task2(num1, num2) {
//   try {
//     if (num2 !== 0) {
//       console.log(num1 / num2);
//     } else {
//       throw new Error("denominator is zero.");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// task2(5, 5);
// task2(5, 0);

// task 3

// function task3(){
//     try {
//         console.log('inside try block');

//         throw new Error('inside catch block')
//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log('alaways run');
//     }
// }
// task3()

// task 4

// function task4(num) {
//   if (num === 0) {
//     throw new Error("number is 0");
//   }
//   try {
//     if (num % 2 == 0) {
//       console.log("it even");
//     } else {
//       console.log("it odd");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// task4(5);
// task4(4);
// task4(0);

// task 5

// function vaildateuser(name) {
//   try {
//     if (name === "") {
//       throw new Error("plz enter your name");
//     } else {
//       console.log(`hay ${name}`);
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// vaildateuser('vinay')
// vaildateuser('')

// task 6
// function task6(){
//     return new Promise((resolve, reject)=>{
//         let random = Math.random()

//         setTimeout(() => {
//             if(random <0.5){
//                 resolve('Promise resolved successfully!')
//             }else{
//                 reject('Promise rejected')
//             }
//         }, 1000);
//     })
// }

// task6().then((resp)=>{
//     console.log(resp);
// }).catch((err)=>{
//     console.log(err);
// })

// task 7

// async function task7() {
//   let task7promise = new Promise((resolve, reject) => {
//     let random = Math.random();

//     setTimeout(() => {
//       if (random < 0.5) {
//         resolve("Promise resolved successfully!");
//       } else {
//         reject("Promise rejected");
//       }
//     }, 1000);
//   });
//   try {
//     let resp = await task7promise;
//     console.log(resp);
//   } catch (error) {
//     console.log(error);
//   }
// }

// task7();

// task 8

fetch('"https://invalidurl.com/"')
  .then((resp) => console.log(resp.json()))
  .catch((err) => console.log(err));



// task 9

async function newfetch(){
    try {
        let resp = await fetch("https://invalidurl.com/")
        let data = await resp.json()
        console.log(data);
        
        
    } catch (error) {
        
        console.log(error);
    }
}

newfetch()