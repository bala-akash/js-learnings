//String methods

let content = "akash,pavi,vasi";
console.log(content.split(","));
console.log(content.substring(0, 5));
console.log(content.substr(0, 5));
console.log(content.length);
//example for includes
const ageMustbe = 18;
const info = `You can drive a car if you are above ${ageMustbe}`;
if (info.includes("18")) {
  console.log("You can drive");
} else console.log("you can't drive");
