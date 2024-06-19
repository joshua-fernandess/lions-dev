var ladoDado

console.log("Qual a quantidade de lado do seu dado")
process.stdin.once('data', function (data){
    ladoDado = parseInt(data.toString().trim())
    processamento(ladoDado)
    process.exit()
})

function processamento(ladoDado){
    console.log(Math.floor(Math.random()* ladoDado + 1))

}