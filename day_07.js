let MyBook = {
  title: "one Side love",
  author: "vinay",
  year: 2024,
  booksinfo: function () {
    console.log(`the book name ${MyBook.title} and the author is ${MyBook.author}`);
  },
  booksinfo2: function () {
    console.log(`the book name ${this.title} and the author is ${this.author}`);
  },
  updateYear: function (newyear) {
    this.year = newyear;
    console.log(this.year);
  },
};

console.log(MyBook);
console.log(MyBook.title);
console.log(MyBook.author);

MyBook.booksinfo();
MyBook.updateYear(2005);

const bookstore = [
  {
    title: "one side love",
    book1info: {
      year: 2023,
    },
  },
  {
    title: "breakup men",
    book1info: {
      year: 2005,
    },
  },
];

console.log(bookstore);

bookstore.forEach((bookTitle)=>{
    console.log(bookTitle.title)
})


MyBook.booksinfo2()


let MyBook2 = {
    title: "one Side love",
    author: "vinay",
    year: 2024,
  };

for (const key in MyBook2) {
    console.log(`the key of mybook obj : ${key} the value of mybook Obj ${MyBook2[key]}`);
}

console.log(`key of mybook2 : ${Object.keys(MyBook2)}`);
console.log(`value of mybook2 : ${Object.values(MyBook2)}`);


