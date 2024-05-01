//strong number

let num = 145
let temp = num
let sum = 0

while(num > 0){
    rem = temp % 10
    let fact = 1

    for(let i = 1; i <=rem; i ++)
    {
        fact = fact * i

    }
    sum = sum + fact
    num = Math.trunc( num / 10)
}
if( sum == num)
console.log(' is strong number');
else
console.log('is not a strong number')