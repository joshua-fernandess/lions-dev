let gostaDeCafe
let resposta

console.log("Você gosta de café?")
process.stdin.once('data', function(data){
    gostaDeCafe = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta){
    if (resposta == "sim"){
        gostaDeCafe = true
    } else { gostaDeCafe = false
    }

    if (gostaDeCafe == true){
        console.log("aproveite seu café")
    } else { console.log("ah que pena")}
}
