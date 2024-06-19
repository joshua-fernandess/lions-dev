let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notaMaxima = notas[0]
let notaMinima = notas[0]
let contador = 0
let reprovados = 0

// Calcular a média
for (let i = 0; i < notas.length; i++){
    soma += notas[i]
}
media = soma / notas.length
console.log(`A média é ${media}`)

// Nota máxima e nota mínima
for (let i = 0; i < notas.length; i++){
    if(notas[i] > notaMaxima){
        notaMaxima = notas[i]
    } else if(notas[i] < notaMinima){
        notaMinima = notas[i]
    }
}
console.log(`Nota máxima: ${notaMaxima}`)
console.log(`Nota mínima: ${notaMinima}`)

// Notas acima da média
for (let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        contador++
    }
}
console.log(`Quantidade de notas acima da média: ${contador}`)

// Adicionar nova nota
notas.push(8.5)
console.log(`Array com lista atualizada de notas: ${notas}`)

// Reprovados
for (let i = 0; i < notas.length; i++){
    if (notas[i] < 6.00){
        reprovados++
    }
}
console.log(`Quantidade de reprovados: ${reprovados}`)