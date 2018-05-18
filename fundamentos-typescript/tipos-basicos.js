//boolean 
var estaPago = true;
//number - inteiros ou casos decimais
var idade = 20;
var valor = 29.99;
//string
var empresa = 'AlgaWorks';
//Template Strings
var nome = 'Joao';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = 'Olá, meu nome ' + nome + 'e tenho ' + idade + ' anos';
//arrays
var notas = [6, 7, 9];
//tuple
var alunos = ['Joao', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//any - Usar em caso de biblioteca de terceiros, migração de JS para TSC, Array com vários tipos de dados
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
//void 
function alerta() {
    //...alert('Operação não permitida');
}
//null e undefined -> não faz muito sentido, pouco usado (são subtipos dos outros tipos)
var u = undefined;
var n = null;
