// Break


// function Name(){

//     for(let i = 1; i <= 50; i++){
//         console.log('pranjal')
//         if( i == 2){
//             break
//         }
//     }
// }Name()                 //pranjal (2 times)


// function Name(){

//     for(let i = 1; i <= 4; i++){
//         if( i == 2){
//             break
//         }
//         console.log('pranjal')

//     }
// }
// Name()                 //pranjal 


// continue

// function Name(){

//     for(let i = 1; i <= 4; i++){
//         if( i == 2){
//             continue
//         }
//         console.log('pranjal')

//     }
// }
// Name()                 //pranjal (3 times)


// function Name(){

//     for(let i = 1; i <= 4; i++){
//         console.log('pranjal')

//         if( i == 2){
//             continue
//         }

//     }
// }
// Name()                 //pranjal (4 times)


// return

// function Name(){

//     for(let i = 1; i <= 4; i++){

//         if( i == 2){
//             return "hello how are you"
//         }
//     }
// }
// Name()   
// console.log(Name())          // hello how are you 

    function Name(){
    for(let i = 1; i <= 4; i++){

        if( i == 2){
            return "hello how are you", "where are you"
        }
    }
    }
Name()   
console.log(Name())          // where are you  // last value will be printed  
