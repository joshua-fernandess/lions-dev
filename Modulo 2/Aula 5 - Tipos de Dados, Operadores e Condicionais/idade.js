let nome 
let idade
const ano = 2024

console.log("Qual é seu nome?")

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log("Qual é sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade){
    var dataNasc = ano - idade
    var aniv = dataNasc - 1
    console.log(`Olá ${nome}, o ano do seu nascimento é ${dataNasc} ou se você não tiver feito aniversário ainda, é ${aniv}`)
}