const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let filmes = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar filmes
	2. Listar todos os filmes
	3. Editar filmes
	4. Remover filmes
	5. Sair
	`)

rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFilmes()
				break
			case '2':
				listarFilmes()
				break
			case '3':
				editarFilmes()
				break
			case '4':
				removerFilmes()
				break
			case '5':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFilmes() {
	rl.question('Digite o nome do filme: ', (nome) => {
		rl.question('Digite o ano do filme: ', (ano) => {
			rl.question('Digite o gênero do filme: ', (genero) => {
				filmes.push({ nome: nome, ano: ano, genero: genero})
				console.log('Filme cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFilmes(){
	if (filmes.length === 0){
		console.log("Não há filmes cadastrados")
	} else{ 
		console.log("Lista de filmes:")
		for (let i = 0; i < filmes.length; i++){
			const filme = filmes[i]
			console.log(`Nome: ${filme.nome}, Ano: ${filme.ano}, Genero: ${filme.genero}`)	
		}
	

	}
	exibirMenu()


}

function editarFilmes(){
	if (filmes.length == 0){
		console.log("Não há filmes cadastrados")
	} else {
		console.log('Lista de filmes')
		filmes.forEach((filme, index) => {
			console.log(`${index + 1}, ${filme.nome}`)
		})
		rl.question('Digite o número do filme que deseja editar:', (numero) =>{
			if(numero > 0 && numero <= filmes.length){
				rl.question('Digite o novo nome:', (nome) => {
					rl.question('Digite o novo ano:', (ano) => {
						rl.question('Digite o novo genero:', (genero) => {
							filmes[numero - 1] = {
								nome,
								ano,
								genero
							}
							console.log('Editado com sucesso!')
							exibirMenu()
						})
					})
				})
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}


function removerFilmes(){
	if(filmes.length == 0){
		console.log('Nenhum filme cadastrado.')
		exibirMenu()
	} else {
		console.log('Lista de filmes')
		filmes.forEach((filme, index) => {
			console.log(`${index + 1}, ${filme.nome}`)
		})
		rl.question('Digite o número do filme que deseja remover:', (numero) =>{
			if(numero > 0 && numero <= filmes.length){
				filmes.splice(numero - 1, 1)
				console.log('Filme removido com sucesso!')
				exibirMenu()
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}