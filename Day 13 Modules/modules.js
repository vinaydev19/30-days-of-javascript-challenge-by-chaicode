import addnum from "./modules1.js";
import person from "./modules2.js";
import { addnumber, subnumber, muladdnumber, divnumber } from "./modules3.js";
import sayhello from "./modules4.js";
import { PI, circle } from "./modules5.js";
import _ from "lodash";
import axios from "axios";

console.log(addnum(2, 2));

console.log(person.heytoperson());

console.log(addnumber(5, 5));
console.log(subnumber(5, 5));
console.log(muladdnumber(5, 5));
console.log(divnumber(5, 5));

console.log(sayhello("vinay"));

console.log(PI);
console.log(circle(5));

function removeDuplicateNumbers(arr) {
  return _.uniq(arr);
}

const uniqueNumbers = removeDuplicateNumbers([
  1, 2, 3, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
]);

console.log(uniqueNumbers);

async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("Response data: ", response);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUsers();
