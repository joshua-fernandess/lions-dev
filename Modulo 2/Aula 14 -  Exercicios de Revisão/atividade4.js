let notas = [6, 7, 8, 9, 10, 7, 8, 5, 9, 6]
let soma = 0
let media = 0
let notaMaisAlta = notas[0]
let notaMaisBaixa = notas[0]
let contador = 0
let notasrepro = 0


// Calcular média
for (let i = 0; i < notas.length; i++){
    soma += notas[i]
} 
media = soma / notas.length
console.log(`A média é ${media}`)

// Encontrar e exibir nota mais alta e nota mais baixa
for (i = 0; i < notas.length; i++){
    if(notas[i] > notaMaisAlta){
        notaMaisAlta = notas[i]
    } else if (notas[i] < notaMaisBaixa){
        notaMaisBaixa = notas[i]
    }
    
}
console.log(`Nota mais alta: ${notaMaisAlta}`)
console.log(`Nota mais baixa: ${notaMaisBaixa} `)


// Contar e exibir quantas notas estão acima da média calculada
for (i = 0; i < notas.length; i++){
    if(notas[i] > media) {
        contador++
    }
}
console.log(`Total de notas acima da média: ${contador}`)

// Adicionar uma nova nota ao array e exibir o array atualizado
notas.push(8)
console.log(`Array atualizado com nova nota adicionada: ${notas}`)

// Contar e exibir quantas notas são consideradas reprovadas (abaixo de 8.0)
for (i = 0; i < notas.length; i++){
    if(notas[i] < 8){
        notasrepro++
    }
}
console.log(`Quantidade de notas reprovadas: ${notasrepro}`)