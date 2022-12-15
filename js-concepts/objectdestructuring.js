//old java object destructuring
let personInfo = {
  firstName: "bala",
  lastName: "akash",
  currentAge: 23,
};
console.log(personInfo.firstName);
console.log(personInfo.lastName);
console.log(personInfo.currentAge);

//ES6 object destructuring

// let { firstName, lastName, currentAge } = personInfo;
// console.log(firstName);
// console.log(lastName);
// console.log(currentAge);

let { firstName, ...userIn } = personInfo;
console.log(firstName);
console.log(userIn);
