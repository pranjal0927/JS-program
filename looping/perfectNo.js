//perfect number 

let num = +prompt('enter number')
let rem = 0
let sum = 0

for(i = 0; i<= num; i++)
{
    rem = num % 10
    sum = sum + i

}
if( sum == num )
    console.log('number is perfect number');
else
    console.log('number is not a perfect number');
