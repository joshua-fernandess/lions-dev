let coresFavoritas = ['preto', ' azul ', ' verde']
let coresEspeciais = []
let corDoUsuario 

console.log("Qual é sua cor favorita?")
process.stdin.once("data", function (data){
    corDoUsuario = data.toString().trim()
    mostrarCores(corDoUsuario)
    process.exit()
})

function mostrarCores(corDoUsuario){
    if (coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor favorita é uma das favoritas da turma!')
    } else {coresEspeciais.push(corDoUsuario)
        console.log('A sua cor favorita é diferente, vamos adicionar à lista!')
    }

    console.log(`Cores favoritas: ${coresFavoritas}`)
    console.log(`Cores Especiais: ${coresEspeciais}`)
    console.log(`A quantidade de cores favoritas é ${coresFavoritas.length}`)
}


