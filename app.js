
$(document).ready(function(){

    let firstNumber ;
    let secondNumber;
    let operator;


    $('.number').click(function(){
        
        let result=$('#result').text();
        let currentNumber = $(this).text();

        
        newResult = Number(result+currentNumber);

        $('#result').text(newResult);

    })

    $('.operator').click(function(){

        // store the first number
        firstNumber = Number($('#result').text());

        // fetch the operator
        operator = $(this).text();

        // set the screen to equal to zero
        $('#result').text(0);


    })

    $('#clear').click(function (){
        
        $('#result').text(0);
        
    })

    $('#equal').click(function (){

        secondNumber = Number($('#result').text());

        if(operator==='+'){
            $('#result').text(firstNumber + secondNumber);
        }
        else if(operator==='-'){
            $('#result').text(firstNumber - secondNumber);
        }
        else if(operator==='*'){
            $('#result').text(firstNumber * secondNumber);
        }
        else if(operator==='/'){
            $('#result').text(firstNumber / secondNumber);
        }

    })
})