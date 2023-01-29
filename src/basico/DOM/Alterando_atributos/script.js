// alterando atributo de class ou adiciona

// adicionar  setAttribute()

var title = document.querySelector("#title")
// seleciona a elemento

title.setAttribute("class" ,"testando-atributo")
// adiciona a class e com o nome testando-atributo
console.log(title);

// desabilitar atributo
var btn = document.querySelector("#btn")

btn.setAttribute("disabled", "disabled")
// atributo de destivar o button

// atributo id
var subtitle = document.querySelector(".subtitle")

subtitle.setAttribute("id", "titulo-2" );

//  remover atributos
var lista = document.querySelector("#lista")

lista.removeAttribute("id");