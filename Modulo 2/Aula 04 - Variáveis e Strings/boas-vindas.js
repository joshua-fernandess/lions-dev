var nome = '';
console.log("Digite seu nome:");
process.stdin.on( 'data', function(data){
    nome = data.toString();
    let saudacao = "Olá " + nome;
    console.log(saudacao)
    process.exit();
})