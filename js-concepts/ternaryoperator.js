// const sarahAge = 15;
// const drinks =
//   sarahAge > 18
//     ? console.log("she can drink wine")
//     : console.log("she can drink juice");

function getApple() {
  setTimeout(() => {
    console.log("5 apples");
    return "5 apples";
  }, 5000);
}

function getOrange() {
  setTimeout(() => {
    console.log("4 orange");
    return "4 orange";
  }, 4000);
}

let apple = getApple(); // 5s
console.log(apple);
let orange = getOrange(); // 4s
console.log(orange);
