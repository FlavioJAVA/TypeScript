class Cliente {
	nome: string;
	idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	apresentar() {
		return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
	}
}

let joao: Cliente = new Cliente('Joao', 25);
let apresentacao: string = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Cliente('Maria', 23);
apresentacao = maria.apresentar();

console.log(apresentacao);