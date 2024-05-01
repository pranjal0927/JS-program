// print fibinocia series

let n = +prompt('enter number')

let a = 0 
let b = 1
let temp
for(i = 0 ; i < n ; i++)
{
    if( i<= 1)
    temp = i;
    else
    {
     temp = a + b
     a = b
     b = temp
    }
    console.log(temp);
}
console.log('\n');
