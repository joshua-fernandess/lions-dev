
function calcular(a,b,op){
    if(op == '+'){
        return a + b
    }
     else if (op == '-'){
        return a - b
    }
    else if (op == '/'){
        return a / b
    } else if (op == '*'){
        return a * b
    } else {
        console.log("O operador que você digitou é inválido!")
    }

}
 
console.log(calcular(6, 4, '+'))
console.log(calcular(10, 4, '-'))
console.log(calcular(3, 5, '*'))
console.log(calcular(10, 5, '/'))