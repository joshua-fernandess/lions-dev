var somaPares = 0
var somaImpares = 0
var totalPares = 0 
var totalImpares = 0 
var mediaPares = 0
var mediaImpares = 0

for (let i = 0; i <= 999; i = i + 1){
    if (i % 2 == 0){somaPares += i 
        totalPares ++} 
    else {somaImpares += i 
        totalImpares ++ }
}

mediaPares = somaPares / totalPares
mediaImpares = somaImpares / totalImpares
console.log(`A soma dos números pares é ${somaPares}`)
console.log(`A soma dos números impares é ${somaImpares}`)
console.log(`O total dos números pares é ${totalPares}`)
console.log(`o total dos números impares é ${totalImpares}`)
console.log(`A média dos números pares é ${mediaPares}`)
console.log(`A média dos números impares é ${mediaImpares}`)

if (mediaPares > mediaImpares){
    console.log("A média dos números pares é maior do que a média dos números impares.")}
    else if (mediaImpares > mediaPares) {
        console.log("A média dos números impares é maior que a média dos números pares.")
    } else{
        console.log("A média dos números pares é igual a média dos impares.")
    }
