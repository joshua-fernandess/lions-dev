const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem vindo(a) ao jogo de adivinhação")

let rodadas = 0
let maxRodadas = 10
const numero = Math.floor(Math.random() * 100) + 1

function palpite(){
    rodadas++
    if (rodadas <= maxRodadas){
        rl.question('Tente adivinhar o número ', (resposta) => {
            console.log(`Você digitou ${resposta}`)
            switch(true){
                case (resposta > numero):
                    console.log('Muito alto')
                    palpite()
                    break
                case (resposta < numero):
                    console.log('Muito baixo')
                    palpite()
                    break
                case (resposta == numero):
                    console.log(`Parabéns! Você acertou o número era ${numero} em ${rodadas} rodadas!`)
                    rl.close()
                    break
                default:
                    console.log('Número inválido!')
                    palpite()
                }

            }
        )
    } else {
        console.log('Você excedeu o número de rodadas!')
        rl.close()
    }
    
}
palpite()