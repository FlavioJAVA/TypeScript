var quantidade = 20;
//não compila - pois foi inferido o tipo ao instanciar o let
//quantidade = 'qualquer';
var x = [1, 2, null];
//não compila
//x[0] = boolean;
//Contextual typing
window.onmousedown = function (evento) {
    console.log(evento.button); // ok
    //console.log(evento.buton); Não compila
};
//o ideal é sempre tipar os valores!
