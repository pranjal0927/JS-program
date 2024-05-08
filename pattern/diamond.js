//diamond

let str=''
let n = 4
for(let i = 1;i <= n; i++)
    {
     for(let j = 4;j > i; j--)
     {
      str += '  '
     }
     for(let k = 1; k <= i; k++)
     {
      str += "* "
     }
     for(let l = 1; l < i; l++)
     {
      str += "* "
     }
    str += '\n'
    }
    console.log(str)



    for(let i =n - 1;i >= 1; i--)
    {
     for(let j = n;j > i; j--)
     {
      str += '  '
     }
     for(let k = 1; k <= i; k++)
     {
      str += "* "
     }
     for(let l = 1; l < i; l++)
     {
      str += "* "
     }
    str += '\n'
    }
    console.log(str)
