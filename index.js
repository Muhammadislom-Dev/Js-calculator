var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var operation = document.getElementById('operation');
var button = document.getElementById('button');


button.addEventListener('click', function(event){

    var num1 = Number(number1.value);
    var num2 = Number(number2.value)

    if(operation.value == '+'){
        result.textContent = num1 + num2;
    }
    else if(operation.value == '-'){
        result.textContent = num1 - num2;
    }
    else if(operation.value == '*'){
        result.textContent = num1 * num2;
    }
    else if(operation.value == '/' && num2 != 0){
        result.textContent = num1 / num2;
    }
    else if(operation.value == '**'){
        result.textContent = num1 ** num2;
    }
    else{
        alert('Maxraj 0ga teng emas!')
    }

})