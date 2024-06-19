let nota1
let nota2
let media

console.log("Insira a primeira nota:")
process.stdin.once("data", function (data){
    nota1 = parseFloat(data.toString().trim())
    console.log("Insira a segunda nota:")

    process.stdin.once('data', function(data){
        nota2 = parseFloat(data.toString().trim())
        calcularMedia(nota1, nota2)
        process.exit()
    })
})

function calcularMedia(nota1, nota2){
    media = (nota1 + nota2) / 2
    if (media < 8){
        console.log(`Que pena, você ficou para a recuperação pois sua nota foi ${media}`)
    } else{
        console.log(`Parabéns, você passou de ano com ${media}`)
    }
}