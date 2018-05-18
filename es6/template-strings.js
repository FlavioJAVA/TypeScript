const precos = ['10', '23', '29'];

const acimaDeVinte = precos
	.filter(preco => preco > 20)
	.map(preco => `R$ ${preco},00`);//template string

console.log(acimaDeVinte);