const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar todos os funcionários
	3. Exibir funcionário com maior salário
	4. Editar funcionário
	5. Remover funcionário
	6. Sair
	`)

rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
			case '3':
				exibirMaiorSalario()
				break
			case '4':
				editarFuncionario()
				break
			case '5':
				removerFuncionario()
				break
			case '6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios(){
	if (funcionarios.length === 0){
		console.log("Não há funcionários cadastrados")
	} else{ 
		console.log("Lista de funcionários:")
		for (let i = 0; i < funcionarios.length; i++){
			const funcionario = funcionarios[i]
			console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)	
		}
	

	}
	exibirMenu()


}

function exibirMaiorSalario(){
	if(funcionarios.length === 0){
		console.log("Não há funcionários cadastrados")
	} else{
		let funcionarioMaiorSalario = funcionarios[0]
		for(let i = 1; i < funcionarios.length; i++){
			if(funcionarios[i].salario > funcionarioMaiorSalario.salario){
				funcionarioMaiorSalario = funcionarios[i]
			}
			
		}
		console.log(`O funcionário com maior salário:
		Nome: ${funcionarioMaiorSalario.nome} 
		Cargo: ${funcionarioMaiorSalario.cargo}
		Salário: ${funcionarioMaiorSalario.salario}`)

	}
	exibirMenu()
}

function editarFuncionario(){
	if (funcionarios.length == 0){
		console.log("Não há funcionários cadastrados")
	} else {
		console.log('Lista de funcionários')
		funcionarios.forEach((funcionario, index) => {
			console.log(`${index + 1}, ${funcionario.nome}`)
		})
		rl.question('Digite o número do funcionário que deseja editar:', (numero) =>{
			if(numero > 0 && numero <= funcionarios.length){
				rl.question('Digite o novo nome:', (nome) => {
					rl.question('Digite o novo cargo:', (cargo) => {
						rl.question('Digite o novo salário:', (salario) => {
							funcionarios[numero - 1] = {
								nome,
								cargo,
								salario
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


function removerFuncionario(){
	if(funcionarios.length == 0){
		console.log('Nenhum funcionário cadastrado.')
		exibirMenu()
	} else {
		console.log('Lista de funcionários')
		funcionarios.forEach((funcionario, index) => {
			console.log(`${index + 1}, ${funcionario.nome}`)
		})
		rl.question('Digite o número do funcionário que deseja remover:', (numero) =>{
			if(numero > 0 && numero <= funcionarios.length){
				funcionarios.splice(numero - 1, 1)
				console.log('Funcionário removido com sucesso!')
				exibirMenu()
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}