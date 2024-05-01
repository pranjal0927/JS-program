// add first five odd number

let no = 50
let issPrime = false
let count = 1
let sum = 0
let i 
for (i = 1; i < 50; i++) {
    for(let j = 1; j <= i; j++ )
    {
        if( i % j == 0)
        {
            issPrime = false
            count++
        }
        else{
            issPrime = true
            count++
        }
    } 
    if(issPrime)
    {
        if(count < 6)
        {
            sum = sum + i
        }
    }   
}
console.log(sum)