let nome
let idade


console.log("Qual é seu nome?")
process.stdin.once("data", function(data){
    nome = data.toString().trim()
    console.log("Qual é a sua idade?")

    process.stdin.once('data', function(data){
        idade = data.toString().trim()
        processamento(nome,idade)
        process.exit()
    })
})

function processamento(nome,idade){
   
    if (idade >= 18)
        {console.log(`Olá ${nome}, você já é maior de idade!`)
    } else{  
        var ano = 18 - idade
        console.log(`${nome}, você vai ser maior de idade em ${ano} anos!`)

    }}