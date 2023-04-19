const textValor1 = document.getElementById('v1');
const textOperacion = document.getElementById('operacion');
const textValor2 = document.getElementById('v2');
const btnCalcular = document.getElementById('calcular');
const pResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', calcular);

function calcular() {
    const valor1 = parseFloat(textValor1.value);
    const operacion = textOperacion.value;
    const valor2 = parseFloat(textValor2.value);
    
    if((operacion == '+' ||  operacion == '-' || operacion == '*' || operacion == '/') && !isNaN(valor1) && !isNaN(valor2)){
        let resultado;
        switch(operacion){
            case '+':
                resultado = valor1 + valor2;
                break;
            case '-':
                resultado = valor1 - valor2;
                break;
            case '*':
                resultado = valor1 * valor2;
                break;
            case '/':
                resultado = valor1 / valor2;
                break;
        }
        pResultado.style = "color: black";
        pResultado.innerText = '= ' + resultado;
    }
    else{
        pResultado.style = "color: red";
        pResultado.innerText ='Operacion no posible';
    }

}