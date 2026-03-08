//Write a function that:

// Takes an array of numbers

// Returns the first even number it finds

// If there is no even number, return "none"

function firstEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }

  return "none";
}

console.log(firstEven([3, 7, 5, 8, 9]));
