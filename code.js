//All questions should be printed to your Browser's console using console.log()

// Step 1: Create the array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Step 2: Programmatically subtract the first element from the last element
let difference = ages[ages.length - 1] - ages[0];
console.log(`Difference between last and first element: ${difference}`);
// Step 3: Add a new age to ensure the code is dynamic
ages.push(45); // Adding a new age
difference = ages[ages.length - 1] - ages[0]; // Recalculate the difference
console.log(`New difference after adding an age: ${difference}`);
// Step 4: Calculate the average age using a loop
let total = 0;
for (let age of ages) {
  total += age;
}
let averageAge = total / ages.length;
console.log(`Average age: ${averageAge}`);
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names= ['Sam','Tommy','Tim','Sally','Buck','Bob'];
//Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters=0;
for (let i= 0; i< names.length; i++) {
  totalletters= names[i];
  
}
const averageLetters = totalLetters / names.length;
console.log("Average number of letters per name:", averageLetters);
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let Name = '';
for (let i = 0; i < names.length; i++) {
  concatenatedNames = names[i] + ' ';
}
console.log("Concatenated names:", concatenatedNames.trim());
//How do you access the last element of any array?
const Names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Access the last element
const lastElement = names[names.length - 1];
console.log("Last element:", lastElement);
//How do you access the first element of any array?
const firstElement = names[names.length ];
console.log("First element:", firstElement);
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const name =['Sam','Tommy','Tim','Sally','Buck','Bob'];
for (let i = 0; i< names.length; i++);
let nameLengths=(names[i=0].length);
console.log("Name lengths:", nameLengths);
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
const nameLength = [3, 5, 3, 5, 4, 3];
let totalSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    totalSum += nameLengths[i];
}
console.log("Sum of all elements in nameLengths:", totalSum);
//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function repeatWord(word, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
      result += word;
  }
  return result;
}
const repeatedWord = repeatWord('Hello', 3);
console.log(repeatedWord); // Output: HelloHelloHello
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Amy', 'McVade');
console.log(fullName); // Output: Amy McVade
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i];
  }
  return totalSum > 100;
}
const numbersArray = [20, 30, 50, 10];
console.log(isSumGreaterThan100(numbersArray)); // Output: true

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i];
  }
  return totalSum / numbers.length;
}
const numberArray = [10, 20, 30, 40, 50];
console.log(calculateAverage(numberArray)); // Output: 30
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverages(array1, array2) {
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
      sum1 += array1[i];
  }
  const avg1 = sum1 / array1.length;
  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
      sum2 += array2[i];
  }
  const avg2 = sum2 / array2.length;
  return avg1 > avg2;
}
const array1 = [10, 20, 30];
const array2 = [5, 15, 25];
console.log(compareAverages(array1, array2)); // Output
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
const isHotOutside = true;
const moneyInPocket = 15.00;
console.log(willBuyDrink(isHotOutside, moneyInPocket)); // Output: true

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function calculateTotalTime(taskDurations) {
  let totalTime = 0;
  for (let i = 0; i < taskDurations.length; i++) {
      totalTime += taskDurations[i];
  }
  return totalTime;
}
const dailyTasks = [30, 45, 60, 90]; // Task durations in minutes
const totalMinutesSpent = calculateTotalTime(dailyTasks);
console.log("Total time spent on tasks:", totalMinutesSpent, "minutes"); // Output: Total time spent on tasks: 225 minutes

 
