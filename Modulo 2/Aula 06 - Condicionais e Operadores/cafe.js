let gostaDeCafe

console.log("Você gosta de café?")
process.stdin.once('data', function(data){
    gostaDeCafe = data.toString().trim()
    processamento(gostaDeCafe)
    process.exit()
})

function processamento(gostaDeCafe){
    if (gostaDeCafe == "sim"){
        console.log("café é vida")
    } else {console.log("que pena")}
    }








