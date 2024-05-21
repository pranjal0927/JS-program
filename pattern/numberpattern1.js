// you are given a Number. you need to print the pattern for the given number value of n
// for n = 2 the pattern will be
// 2211
// 21

// for n = 3 then pattern will be
// 333222111
// 332211
// 321


let str =''


 for(let i = 3; i>=1;i--){
    for(let j= 3; j>=i;j--){
        str += j.toString().repeat(i)
 
    }

str += "\n"
}
console.log(str)
