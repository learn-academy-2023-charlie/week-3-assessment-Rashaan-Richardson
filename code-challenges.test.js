// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudo code: 
// input: a number that is how long you want to sequence to run for
// output : an array of numbers that are the fibbo sequence 
      // const fibLength1 = 6
      // Expected output: [1, 1, 2, 3, 5, 8]
// process: create inital array and push the new numbers to the end while indexing

// a) Create a test with expect statements for each of the variables provided.

// describe("fibSeq", () => {
  //     it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
  //         const fibLength1 = 6
  //         expect(titleCase(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
  //     })
  // })
  
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const fibSeq = (element) =>{
  var fibbo = [1,1]
  if (element > 2) {
    for (let i = 2; i < element; i++){
      fibbo.push(fibbo[fibbo.length-1] + fibbo[fibbo.length-2])
    }
  }
  return fibbo
}
console.log(fibSeq(fibLength1));
console.log(fibSeq(fibLength2));

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.

// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Pseudo code: 
// input: an object with k,v pairs in which the v is a number
// output : sorted array by the values in ascending order
// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// Expected output: [15, 15, 20, 30, 30, 60, 90]
// process: use the Object.entries built in method 

// a) Create a test with expect statements for each of the variables provided.

// describe("sortObj", () => {
  //     it("Create a function that takes in an object and returns an array of the values sorted from least to greatest.", () => {
  //         const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }      expect(sortObj(studyMinutesWeek1)).toEqual( [ 'wednesday', 15 ],
  // [ 'friday', 15 ],
  // [ 'tuesday', 20 ],
  // [ 'monday', 30 ],
  // [ 'thursday', 30 ],
  // [ 'saturday', 60 ],
  // [ 'sunday', 90 ])
  //     })
  // })
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
const sortObj = (element) => {
  return Object.entries(element).sort(([,a],[,b]) => a- b)
}
console.log(sortObj(studyMinutesWeek1))
console.log(sortObj(studyMinutesWeek2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Pseudo code: 
// input: an array of numbers
// output : an array of numbers that are the sum of all the values before it in the array 
// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
// process: create a variable and update it as we iterate over the array 

// a) Create a test with expect statements for each of the variables provided.

// describe("accSum", () => {
  //     it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    // const accountTransactions1 = [100, -17, -23, -9]
  //         expect(accSum( accountTransactions1 )).toEqual([100, 83, 60, 51])
  //     })
  // })

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
const accSum = (element) => {
  tot = 0
  return element.map((value) => tot += value)
}
console.log(accSum(accountTransactions1));
console.log(accSum(accountTransactions2));
console.log(accSum(accountTransactions3));

