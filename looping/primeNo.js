// prime number
let num1 = 1
let num2 = 30

for(let i = num1; i <= num2; i++)
{
    let flag = 0

    for(let j = 2; j < i; j++)
    {
        if( i % j == 0)
        {
            flag = 1
            break;
        }

    }
    if(i > 1 && flag == 0)
    {
        console.log(i)
    }
}   

