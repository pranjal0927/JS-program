// add first five odd number

let no = 10
let isOdd = false
let count = 1
let sum = 0
let i 
for (i = 1; i <= no; i++) {
    for(let j = 1; j <= i; j++ )
    {
        if( i % 2 == 0)
        {
            isOdd = false
            count++
        }
        else{
            isOdd = true
            console.log('yes', i);
            count++
        }
    } 
    if(isOdd)
    {
        if(count > 6)
        {
            sum = sum + i
        }
    }   
}

console.log(sum)