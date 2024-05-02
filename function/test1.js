

function choice(){
    let input = +prompt("1. Addition \n 2. Substraction \n 3. Multiplication \n 4. Division \n 5. Exit \n enter the choice")

    console.log('choice :', input);
    if( input == 5)
    {
        console.log('thank you for the Choice')
        return;
    }
    
    let num1 = +prompt('enter number num1')
    let num2 = +prompt('enter number num2')

    console.log('first number is:',num1);
    console.log('Second number is:',num2);
    

    switch (input){
        case 1:

        function Add (num1 , num2)
        {
            console.log('Addition of number1 and number2 :', num1 + num2 )
        }
        Add(num1, num2 )
        break
       
        case 2:
    
        function Sub (num1 , num2)
        {
            console.log('substraction of number1 and number2 :', num1 - num2 )
        }
        Sub(num1, num2 )
        break

        case 3:
    
        function Multi (num1 , num2)
        {
            console.log('Multiplication of number1 and number2 :', num1 * num2 )
        }
        Multi(num1, num2 )
        break            

        case 4:
    
        function Division (num1 , num2)
        {
            console.log('Division of number1 and number2 :', num1 / num2 )
        }
        Division(num1, num2 )
        break
   }
}choice()