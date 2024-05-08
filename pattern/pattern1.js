// *****
// *****
// *****
// *****
// *****

// let str = ""

// for(let i = 1; i <= 5; i++)
//     {
//         for(let j = 1; j <= 5; j++)
//             {
//                 str += '*'
//             }
//             str += '\n'
//     }
// console.log(str)


// 12345
// 12345
// 12345
// 12345
// 12345

// let str = ''
// for(let i = 1; i <= 5; i++)
//     {for(let j = 1; j <=5; j++)
//         {
//             str += j
//         }
//         str += '\n'
//     }
// console.log(str)


// *****
// *   *
// *   *
// *   *
// *****



// let str = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i == 1 || i == 5 || j == 1 || j == 5) {
//             str += '*'
//         }
//         else {
//             str += ''
//         }

//     }
//     str += '\n'
// }
// console.log(str)



// *       *
// *       *
// * * * * *
// *       *
// *       *

// let str =""

// for(let i=1; i<=5; i++)
//     {
//         for(let j=1;j<=5;j++){
//             if(i == 3 || j ==1 || j ==5){
//                 str +=" *"
//             }
//             else
//             {
//                 str += "  "
//             }
//         }
//     str +="\n"
//     }
//     console.log(str)



// *****

// *****

// *****

// let str = ""
// for(let i = 1; i <=5 ;i++)
//     {
//         for(let j = 1; j <= 5; j++)
//             {
//                 if( i%2 != 0)
//                     {
//                         str += '*'
//                     }
//                     else
//                     {
//                         str += ' '
//                     }
//             }
//             str += '\n'
//         }
//         console.log(str)


// *****
//   *  
//   *  
//   *  
// *****

// let str = ""
// for(let i = 1; i <= 5; i++)
//     {
//         for(let j = 1; j <=5; j++)
//             {
//                 if(j ==1 || i == 3 || j == 5)
//                     {
//                         str += '*'
//                     }
//                     else{
//                         str +=" "
//                     }
//             }
//             str +='\n'
//         }
//         console.log(str)



// #****
// *#***
// **#**
// ***#*
// ****#

// let str = ""

// for(let i = 1; i <= 5; i++)
//     {
//         for(let j = 1; j <= 5; j++)
//             {
//                 if(i == j)
//                     {
//                         str += '#'
//                     }
//                     else
//                     {
//                         str += '*'
//                     }

//             }
//             str +='\n'

//     }
//     console.log(str)


// ****
// ***
// **
// *


// let res = ''
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j > i; j--) {
//         res += `*`
//     }
//     res += `\n`
// }
// console.log(res)


let res = ''
for(let i =1; i<=5; i++)
    {
        for(let j = 1; j <= i; j++)
            {
                res += `*`
            }

        for(let k = 5; k >i; k--)
            {
                res += `*`
            }
                res += '\n'
    }
    console.log(res)