// criando um elemento
var el = document.createElement("h3");

el.classList = "testando-classe"

var texto = document.createTextNode("esse e o texto")

el.appendChild(texto)

console.log(el)
var title = document.querySelector("#title");
// selecionar o elemnto que quero trocar

console.log(title)

// selecionar o pai do elemento
var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title)