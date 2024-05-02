// reverse the input number

// let num = +prompt('enter number')
let num = 12345
let rem = 0
let rev = 0

while(num > 0)
{
    rem = num %10
    rev = rev * 10 + rem
    num = Math.trunc(num / 10)
}   
console.log(rev)

