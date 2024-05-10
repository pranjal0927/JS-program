//even odd number

// function declaration

let num = 20

// function evenOddNo(){
//         if(num % 2 == 0)
//         console.log('is even number')

//         else
//         console.log('is odd number')
// }
// evenOddNo()

// function expression

// let evenOddNo = function(){

//     (num % 2 == 0)? console.log('is even number') : console.log('is odd number')
// }
// evenOddNo()

// arrow function 

// let evenOddNo = () => {
//     (num % 2 == 0)? console.log('is even number') : console.log('is odd number')
// }
// evenOddNo()

// range 1- 100 

// let no = 20

//     let evenOddNo = () => {
//         for(let i = 1; i <= no; i++)
//         {
        
//         (i % 2 ==0)? console.log('is prime number', + i): console.log('is even number', + i)
//     }
// }
// evenOddNo(  )


// let no = 50
// let count = 1
// let sum = 0
// let oddNo = () => {

//         for( let i = 0; i <= no; i++)
//         {
//             if(no % 2 != 0)
//             {
//                 sum += i
//                 count++                
//             }
//             if(count > 5)
//             {
//                 break
//             }
//         }
//         return sum 
//     }
//  let result = oddNo ();
//  console.log( result)


//range 10 to 20 and 50 to 60 
//find count sum and number


function oddNumber()
{
    let count = 0
    let sum = 0


    for(let i = 1; i<= 100; i++)
        {
            if(i >= 10 && i <=20 || i >= 50 && i <=60)
                {
                    if(i % 2 != 0)
                        {

                            console.log(`odd number`,i)
                            count++
                        }
                        
           
                        sum = sum + i
                }


        }
        console.log(`\n`)
        console.log(`sum is:`,sum)
        console.log(`count is:`, count)
    }
oddNumber()
