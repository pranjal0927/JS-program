// amstrong number

let num = 153
let rem = 0
let temp = num
let sum = 0
let len = num.toString().length

while( temp > 0)
{
    rem = temp % 10
    sum = sum + Math.pow( rem, len) 
    temp = Math.trunc( temp / 10)
}
if(sum == num)
    console.log('nnumber is Amstrong number');
else
    console.log('number is not Amstrong number');


