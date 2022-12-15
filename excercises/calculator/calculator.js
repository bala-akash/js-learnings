//coding challenge 1
/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
//prompt('Enter a value');
// const markMass=78
// const markHeight=1.69
// const markBMI=markMass/(markHeight**2)
// console.log(markBMI)

// const johnMass=92
// const johnHeight=1.95
// const johnBMI=johnMass/(johnHeight*johnHeight)
// console.log(johnBMI)

// if(markBMI<johnBMI)console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`)
// else console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`)

//calculator

function add(num1, num2) {
  return num1 + num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multi(num1, num2) {
  return num1 * num2;
}

function calculator(input) {
  if (input.includes('+')) {
    const conversion = operation('+', input);
    const num1 = conversion[0];
    const num2 = conversion[1];
    console.log(add(num1, num2));
  } else if (input.includes('-')) {
    const conversion = operation('-', input);
    const num1 = conversion[0];
    const num2 = conversion[1];
    console.log(sub(num1, num2));
  } else if (input.includes('*')) {
    const conversion = operation('*', input);
    const num1 = conversion[0];
    const num2 = conversion[1];
    console.log(multi(num1, num2));
  } else if (input.includes('/')) {
    const conversion = operation('/', input);
    const num1 = conversion[0];
    const num2 = conversion[1];
    console.log(div(num1, num2));
  }
}

function operation(operator, input) {
  const conversion = input.split(operator);
  const num1 = Number(conversion[0]);
  const num2 = Number(conversion[1]);
  return [num1, num2];
}

calculator('2*90');
calculator('20 + 40');
calculator('20 / 5');
calculator('20 - 5');
