

// function checkNumber(number) {
//   if (5 > 0) {
//     console.log("The number is positive.");
//   } else if (-2< 0) {
//     console.log("The number is negative.");
//   } else {
//     console.log( "The number is zero."+number);
//   }
// }

// // Example usage:
// checkNumber(5);   // Output: The number is positive.
// // checkNumber(-2);  // Output: The number is negative.
// // checkNumber(0);   // Output: The number is zero.
// 1. Create an empty array called "cars".
// let cars = [];

// // 2. Add three car objects to the "cars" array.
// for (let i = 0; i < 3; i++) {
//   let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2018
//   };
//   cars.push(car);
// }

// // 3. Remove the first car object from the "cars" array.
// if (cars.length > 0) {
//   cars.shift();
// }

// // 4. Add a new car object to the "cars" array.
// let newCar = {
//   make: "Honda",
//   model: "Civic",
//   year: 2020
// };
// cars.push(newCar);

// // 5. Update the "model" property of the second car object in the array to "Accord".
// if (cars.length >= 2) {
//   cars[1].model = "Accord";
// }

// // Print the final "cars" array after performing the above operations.
// console.log(cars);
// 1. Create an empty array called "cars".
let cars = [];

// 2. Add three car objects to the "cars" array.
// Each car object should have the specified properties.
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018
});
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018
});
cars.push({
  make: "Toyota",
  model: "Camry",
  year: 2018
});

// 3. Remove the first car object from the "cars" array.
cars.shift();

// 4. Add a new car object to the "cars" array with the specified properties.
cars.push({
  make: "Honda",
  model: "Civic",
  year: 2020
});

// 5. Update the "model" property of the second car object in the array to "Accord".
if (cars.length >= 2) {
  cars[1].model = "Accord";
}

// 6. Print the final "cars" array.
console.log(cars);
