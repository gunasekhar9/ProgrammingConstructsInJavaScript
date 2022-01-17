// Harmonic Series 
console.log("for Harmonic series---")
var readline = require("readline-sync");
let num = readline.question("Enter the number : ")
let sum = 0;
console.log(" Harmonic Series : ");
for (let i = 1; i <= num; i++) 
{
    console.log("1/" + i + "+");
    sum += 1 / i;
}
console.log("=" + sum.toFixed(2));


// Prime Number
console.log("for prime numbers---") 
let number = readline.question("Enter the number : ");
var isPrime = true;
for (let i = 2; i <= number / 2; i++)
{
    let temp = number % i;
    if (temp == 0)
    {
      isPrime = false;
      break;
    }
}
if (isPrime) console.log(number + " is a Prime Number");
else console.log(number + " is not a Prime Number");



// Factorials
console.log("for factorials---")
let Num = readline.question("Enter the number : ");
let fact=1;
for(let i=1; i<=Num; i++)
{
   fact *= i;
}
console.log("The factorial of " + Num + " is : " + fact);