// find length of number

let  num =12345

// let len = num.toString().length
// console.log(len);

let temp = num

while(num > 0)
{
    num = Math.trunc( num /10)
    length++

}
console.log(num)
console.log(length);