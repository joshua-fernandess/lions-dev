function calcular(a, b, op){
    switch(op){
        case '+': 
            return a + b;
        case '-':
            return a - b;
        case '*': 
            return a * b;
        case '/':
            return a / b;
        default: 
        console.log('Operação inválida!')
        break;
    }
    
}

console.log(calcular(4, 6, '+'))
console.log(calcular(8, 4, '-'))
console.log(calcular(5, 2, '*'))
console.log(calcular(6,3, '/'))