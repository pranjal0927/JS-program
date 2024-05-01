// count number required for user input No

let amount = +prompt("enter number")

if (amount >= 2000) {
    num = Math.trunc(amount / 2000)
    amount = amount % 2000
    console.log(" 2000 notes:" + "  " + num)

}
if (amount >= 500) {
    num = Math.trunc(amount / 500)
    amount = amount % 500
    console.log(" 500 notes:" + "  " + num)

}
if (amount >= 200) {
    num = Math.trunc(amount / 200)
    amount = amount % 200
    console.log(" 200 notes:" + "  " + num)

}
if (amount >= 100) {
    num = Math.trunc(amount / 100)
    amount = amount % 100
    console.log(" 100 notes:" + "  " + num)

}
if (amount >= 50) {
    num = Math.trunc(amount / 50)
    amount = amount % 50
    console.log(" 50 notes:" + "  " + num)
}
