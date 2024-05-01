//billing unit using if else loop


// let num = +prompt("enter bill unit")
    let num = 1081
let avg = 0

console.log(num)

if(num <= 1000)
{
    console.log("free")
}
else{ 
    if(num >= 1001 && num <= 1050)
        {
            avg = (num * 2 / 100)
            console.log('bill to be paid in rupees', avg);
        }
        else{ 
            if(num >= 1051 && num <= 1080)
                {
                    avg = (num * 4 / 100)
                    console.log('bill to be paid in rupees', avg);
                }
        
                else{ 
                    if(num >= 1081 && num <= 1100``)
                        {
                            avg = (num * 8 / 100)
                            console.log('bill to be paid in rupees', avg);
                        }
                        else{
                            avg = (num * 20 / 100)
                            console.log('bill to be paid in rupees', avg);
                        }                   
                    }
            }
        }
    