// print alternate number of amstrong number
let str = ''
let count = 1

for( let i = 1; i <= 1000; i+=2)
{
    let len = i.toString().length
    let sum = 0;
    let temp = i

    while( temp > 0)
        {
           let rem = temp % 10
           sum = sum + Math.pow( rem , len)
           temp = Math.trunc( temp / 10)
        }
        if( sum == i)
        {
            str = str + " " + i
            count++
        }
        else{
            count++
        }
}
console.log(str)