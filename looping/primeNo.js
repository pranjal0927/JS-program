// prime number

let num = +prompt('enter number')
// let num = 10
let isPrime = false

for (i = 2; i <= num; i++) {
    if (num % i == 0) {
        isPrime = false
        break;
    }
}

if (isPrime)
    console.log('is not a prime number');

    else
    console.log('is a prime number');


