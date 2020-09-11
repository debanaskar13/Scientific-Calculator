
$(document).ready(function(){

    let firstNumber ;
    let secondNumber;
    let operator;

    setInterval(function (){

        if(window.innerWidth<576){

            document.getElementById("divId").classList.remove("offset-3");
            document.getElementById("result").classList.remove("display-1");
            document.getElementById("result").classList.add("display-4");
            document.getElementById("divId").classList.add("col-12");


        }
        else if(window.innerWidth>575){

            document.getElementById("divId").classList.add("offset-3");
            document.getElementById("result").classList.remove("display-4");
            document.getElementById("result").classList.add("display-1");
        }

    },500)

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