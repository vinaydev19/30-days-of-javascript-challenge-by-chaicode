// task 1 and 2

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `hey ${this.name} and age is ${this.age}`;
  }

  undataage(age) {
    this.age = age;
    return age;
  }

  static genericGreeting() {
    return "Hello this is a generic greeting message from Person class";
  }
}

const person1 = new person("vinay", 18);
console.log(person1.greeting());
console.log(person1.undataage(20));
console.log(person1.age);

// task 3 and task 4

class student extends person {
  static countstudent = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    student.countstudent++;
  }

  getStudentDetails() {
    return `hey my name is ${this.name} and age is ${this.age} and student id is ${this.studentId}`;
  }

  greeting() {
    return `hey my name is ${this.name} and age is ${this.age} and student id is ${this.studentId}`;
  }

  static getcountstudent() {
    return `count of student is ${this.countstudent}`;
  }
}

const student1 = new student("vinay", 18, 54654);
console.log(student1.getStudentDetails());
console.log(student1.greeting());

// task 5

console.log(person.genericGreeting());

// task 6
console.log(student.getcountstudent());

// task 7
class person2 {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const newperson = new person2("vinay", "porandla", 19);
console.log(newperson.fullname);

newperson.fullname = "vinay porandla";
console.log(newperson.fullname);
