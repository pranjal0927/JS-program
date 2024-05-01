// find alternate odd number from 0 to 1000

let str =''
let count = 1
let oddNo = false

for( let i = 1; i <= 1000; i++)
{
    if(i % 2 != 0)
    {
        if(oddNo)
        {
            str = str + "  " + i
        }        
        oddNo = !oddNo
    }

}
console.log(str)