

function evenNumber(num1, num2)
{
    let num1 = +prompt(`enter number`)
let num2 = +prompt(`enter number`)

    console.log(`Even Number`);
    for(let i = num1; i <= num2; i++)
        {
            if(i % 2 == 0)
                {
                    console.log(i);
                }
        }
}
evenNumber(num1,num2)

