let person = {
  firstName: "Bala",
  lastName: "Akash",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //split it by firstname ad lastname
    let values;
    console.log(values);
  },
};

// let a;
// try {
//   a.includes();
// } catch (err) {
//   console.log(err);
// }

person.fullName = "Pavithran";
console.log(person.fullName);
