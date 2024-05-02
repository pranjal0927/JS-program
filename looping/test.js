// let num = 20
// let count = 0
// let sum = 0
// let str = ''
// let flag = false
// for (let i = 0; i <= num; i++) {
//     if (i % 2 == 0) {
//         flag = true
//         // console.log(' even no' + " " + i)
//         count++
//     }
//     else {
//         flag = false

//     //     // console.log('odd no ' + " " + i)
//         count++
//     }
//     if(flag == true)
//         {
//             if(count < 10)
//         {        sum = sum + i
//             console.log(count , i , sum );
//             // str += sum
//             }   
//         }
// }
// console.log(str)

let num = 1000
let count = 0
let sum = 0
let str = ''
let flag = false
for (let i = num - 20; i <= num; i++) {
    if (i % 2 == 0) {
        flag = true
        // console.log(' even no' + " " + i)
        count++
    }
    else {
        flag = false
    //     // console.log('odd no ' + " " + i)
        count++
    }
    if(flag == true)
        {
            if(count <= 20)
        {        sum = sum + i
            console.log(count , i , sum );
            // str += sum
            }   
        }
}
console.log(str)
