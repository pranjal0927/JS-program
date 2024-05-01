// find perfect number from range 0 to 1000

let start = 1;
let end = 1000;
let str = "";
let sum = 0;

for (let i = start; i <= end; i++) {
    sum = 0; // Reset sum for each number

    for (let j = 1; j < i; j++) {
        if (i % j == 0) { // Check if i is divisible by j
            sum += j;
        }
    }

    if (sum == i) {
        str += " " + sum;
    }
}

console.log(str);