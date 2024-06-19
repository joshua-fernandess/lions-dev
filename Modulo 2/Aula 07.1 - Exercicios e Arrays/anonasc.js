let nome 
let idade
let resposta
let fezAniv
const ano = 2024

console.log("Qual é seu nome?")

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log("Qual é sua idade?")

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        console.log("Você já fez aniversário esse ano?")

        process.stdin.once('data', function(data){
            resposta = data.toString().trim()
            processamento(nome, idade, resposta)
            process.exit()
        })
    })
})

function processamento(nome, idade, resposta){
    if (resposta == "sim"){
        fezAniv = true
    } else {
        fezAniv = false
    }

    if (fezAniv){
        console.log(`olá ${nome}, seu ano de nascimento é ${ano - idade}`)
    } else { 
        console.log(`olá ${nome}, seu ano de nascimento é ${(ano - idade) - 1}`)
    }
}