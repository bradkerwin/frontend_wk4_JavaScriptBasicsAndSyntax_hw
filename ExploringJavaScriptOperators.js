let num1 = 5;
let num2 = 3;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

let updatedNum = 9;

let newSum = sum + updatedNum;
let newDifference = difference - updatedNum;
let newProduct = product * updatedNum;
let newQuotient = quotient / updatedNum;


console.log("New Sum:", newSum);
console.log("New Difference:", newDifference);
console.log("New Product:", newProduct);
console.log("New Quotient:", newQuotient);

console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 not equal to num2?", num1 != num2);

let isEqualto = num1 == quotient;

console.log("Is num1 equal to the quotient variable?", isEqualto);