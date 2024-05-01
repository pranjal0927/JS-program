// 0 to 1000 from fibonaccia series

let n = 30

let a = 0
let b = 1
let temp

for (let i = 1; i <= n; i++) {
    if (i <= 1)
        temp = i
    else {
        temp = a + b
        a = b
        b = temp
    }
    console.log(temp);
}

console.log('\n')