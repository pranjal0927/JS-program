// let num1 = 135
// let num2 = 225

function lcm(num1, num2){


for(let i =1; i <= ( num1 * num2); i++)
    {
        if(i % num1 == 0 && i % num2 ==0)
            {
                return i
            }
    }
}
lcm(135, 225)