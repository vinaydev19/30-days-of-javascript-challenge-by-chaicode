// task 1

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`task 1 is complate`);
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  console.log("task 1 promise is complate");
});

// task 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = true;
    if (!data) {
      resolve({ userName: "vinay" });
    } else {
      reject("ERROR");
    }
  }, 3000);
})
  .then((data) => {
    console.log(data.userName);
  })
  .catch((e) => {
    console.log(e);
  });

// task 3
const tesk3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data form 1");
  }, 1000);
}).then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("data form 2");
      }, 1500);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data form 3");
      }, 2000);
    });
  })
  .catch((error) => console.log(error));

// task 4
const task4promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("async promise is resolve");
  }, 2000);
});

async function task4() {
  const massage = await task4promise;
  console.log(massage);
}

task4();

// task 5

async function task5() {
  let promisetask5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ERROR");
    }, 2000);
  });

  try {
    let massage = await promisetask5;
    console.log(massage);
  } catch (error) {
    console.log(error);
  }
}

task5();

// task 6
fetch("https://jsonplaceholder.typicode.com/users")
.then((resp) => {
  return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// task 7

async function fetchdata() {
  try {
    let resp = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchdata()

// task 8

const promisetask8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise one resolve");
  }, 1000);
});
const promisetask9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise two resolve");
  }, 1500);
});
const promisetask10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise three resolve");
  }, 2000);
});

Promise.all([promisetask8, promisetask9, promisetask10])
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.log(error);
  });


  Promise.race([promisetask8, promisetask9,promisetask10]).then((resp)=>{
    console.log(resp);
  }).catch((error)=>{
    console.log(error);
  })