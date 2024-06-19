let inicial = [27, 10, 3, 0, 20, 5, 6, 3]
let impares = []
let pares = []

inicial.push(13)

for (let i = 0; i < inicial.length; i++){
    if (inicial[i] % 2 == 0){
        pares.push(inicial[i])
    } else if (inicial[i] % 2 != 0){
        impares.push(inicial[i])
    }
}

console.log(`Array de números impares: ${impares}`)
console.log(`Array de números pares: ${pares}`)