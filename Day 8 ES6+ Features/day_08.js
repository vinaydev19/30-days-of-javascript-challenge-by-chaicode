let UserName = "vinay";
let UserAge = 19;

console.log(`my name is ${UserName} and My age is ${UserAge}`);

// task 2
let language = "javscript";
// console.log(`Chai aur ${language} is a standout online series that masterfully breaks down the fundamentals of JavaScript programming for beginners, all in accessible Hindi language. What sets this series apart is its unprecedented depth and comprehensiveness, unparalleled even by paid courses in the market. In this series, I will guide you step-by-step, ensuring even complex concepts become digestible. From basic syntax to advanced concepts, object-oriented programming, and web development essentials, this series leaves no stone unturned. Perfect for individuals with little to no prior experience, "Chai aur Javascript" is a comprehensive, easy-to-follow guide that promises to turn even absolute beginners into competent ${language} developers.
// `);

// task 3
let arrnum = [1, 2, 3, 4, 5];

let [firstelement, secondelement] = arrnum;

console.log(firstelement);
console.log(secondelement);

// tast 4

let MyBook1 = {
  title: "one Side love",
  author: "vinay",
  year: 2024,
};

let { title, author } = MyBook1;
console.log(title);
console.log(author);

// tast 5

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

console.log(...arr1, ...arr2);

// task 6


function sumofnum(...num){
    return num.reduce((acc, curr) => acc += curr, 0)
}
console.log(sumofnum(1, 2, 3));  
console.log(sumofnum(4, 5, 6, 7)); 
console.log(sumofnum(10));  
console.log(sumofnum());  


// task 7


function product(a, b = 1){
  return a * b
}

console.log(product(500,5));
console.log(product(69));

// Activity 5: Enhanced Object Literals

// task 8

let username = 'vinay'
let UserEmail = 'vinay@google.com'


const userinfo={
  username,
  UserEmail,

  getuserinfo(){
    return `the user name is ${this.username} and user email id is ${this.UserEmail}`
  }
}


console.log(userinfo);
console.log(userinfo.getuserinfo());



// task 9

let bookname = 'bookname'

let books = {
  [bookname] : 'rich dad and poor dad'
}

console.log(books);