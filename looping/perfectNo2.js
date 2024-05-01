// //find alternate number of perfect number

let str = ""
let isPerfect = true

for (let i = 1; i <= 1000; i++) {
    let sum = 0

    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum = sum + j
        }
    }
    if (sum == i) {
        if (isPerfect) {
            str = str + " " + i
        }
        isPerfect = ! isPerfect
    }
}
console.log(str)


