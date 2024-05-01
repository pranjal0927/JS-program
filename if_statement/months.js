// Enter which month has how many days.

let month = prompt('enter month')


// console.log('Month :', month)

if( month == 'JAN' && month == 'MAR' && month == 'MAY' && month == 'JUL' && month == 'OCT' && month == 'DEC'){
    console.log("month :", month +" "+ "Days : 31")
}
else if( month == 'APR' && month == 'JUN' && month == 'AUG' && month == 'SEP' && month == 'NOV' ){
    console.log("month :", month +" "+ "Days : 30")
}

else{
    console.log("Month :",month +" "+ "Days: 28")
}