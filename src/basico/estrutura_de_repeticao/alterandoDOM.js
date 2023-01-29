var lista = ['laranja', 'maça','pera', 'jaca', 'limao'];

// criar um elemento apartir do js
var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');
// console.log(body[0]);

body[0].appendChild(listaUl);
var listanoBody = document.getElementsByTagName('ul');

console.log(listanoBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi);

    listanoBody[0].appendChild(liFor)
}