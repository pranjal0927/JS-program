// print alternate strong number

let str = ''
let count = 1
for (let i = 1; i <= 1000; i++) {
    let sum = 0
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum = sum + j
        }
    }

    if (sum == i) {
        if (count % 2 != 0) {
            str = str + " " + i
            count++
        }
        else {
            count++
        }
    }
}

console.log(str)