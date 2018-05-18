//boolean 
let estaPago: boolean = true;

//number - inteiros ou casos decimais
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = 'AlgaWorks';

//Template Strings
let nome: string = 'Joao';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

let concatenacaoTradicional = 'Olá, meu nome ' + nome + 'e tenho ' + idade + ' anos';

//arrays
let notas: number[] = [6, 7, 9];

//tuple
let alunos: [string, number, string] = ['Joao', 10, 'Matemática'];

console.log(alunos[0]);
console.log(alunos[1]);

//enum
enum Cor { Verde, Amarelo, Azul, Branco };
let corFundo: Cor = Cor.Verde;

//any - Usar em caso de biblioteca de terceiros, migração de JS para TSC, Array com vários tipos de dados
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;

//void 
function alerta(): void {
	//...alert('Operação não permitida');
}

//null e undefined -> não faz muito sentido, pouco usado (são subtipos dos outros tipos)
let u: undefined = undefined;
let n: null = null;
