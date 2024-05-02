let input = +prompt( "enter choice")
let num1 = +prompt('enter num1')
let num2 = +prompt('enter num2')

function choice(input) {

    function Number(num1, num2) {
        switch (input) {
            case 1:

                function Add(num1, num2) {
                    console.log('Addition of number1 and number2 :', num1 + num2)
                }
                Add(num1, num2)
                break

            case 2:

                function Sub(num1, num2) {
                    console.log('substraction of number1 and number2 :', num1 - num2)
                }
                Sub(num1, num2)
                break

            case 3:

                function Multi(num1, num2) {
                    console.log('Multiplication of number1 and number2 :', num1 * num2)
                }
                Multi(num1, num2)
                break

            case 4:

                function Division(num1, num2) {
                    console.log('Division of number1 and number2 :', num1 / num2)
                }
                Division(num1, num2)
                break
        }
    }
    Number( num1, num2)
}

choice(input)