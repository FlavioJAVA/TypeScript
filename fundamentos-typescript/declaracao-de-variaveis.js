//var, let e const
//var
//function iniciarTime(iniciaJogo: boolean) {
//	var nome = 'Messi e amigos';
//	if (iniciaJogo) {
//		var cidade = 'em Ourinhos';
//	}
//	console.log(`${nome} vão jogar ${cidade}`);
//}
//iniciarTime(false);
//let
//function iniciarTime(iniciaJogo: boolean) {
//	let nome = 'Messi e amigos';
//	let cidade = 'em São Paulo';
//	if (iniciaJogo) {
//		cidade = 'em Ourinhos';
//	}
//	console.log(`${nome} vão jogar ${cidade}`);
//}
//iniciarTime(false); 
//const
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (iniciaJogo) {
        cidade = 'em Ourinhos';
    }
    //nome = 'Ronaldo e amigos';
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
