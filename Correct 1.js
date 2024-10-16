let a = [1,2,3,4,5,6,7,8,9,10]

// Step 1: Filter out only odd numbers
let oddNumbers = a.filter(function(num) {
    return num % 2 !== 0;  // Keep numbers that are not divisible by 2
});

// Step 2: Multiply the odd numbers together
let product = oddNumbers.reduce(function(acc, num) {
    return acc * num;
}, 1);  // Start with 1 because multiplying by 1 doesn't change the result

console.log(product);

