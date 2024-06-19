let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impares = []

for (i = 0; i <= numeros.length; i++){
    if ( i % 2 != 0){
        impares.push(i)
    }
   
}
console.log(`Array de números impares: ${impares}`)