var numero

console.log("Digite um número")
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero){
    if (numero == 0){
        console.log("O número é igual a zero")
    } else if (numero % 2 == 0 ){
        console.log("O número é par!")
    } else {
        console.log("O número é impar!")
    }
}

