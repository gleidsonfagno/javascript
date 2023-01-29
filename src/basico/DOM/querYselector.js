var itensClasse =document.getElementsByClassName("item")

console.log(itensClasse)

// querySelectorAll

var itensQuery = document.querySelectorAll("#lista2 li");
// var itensQuery = document.querySelectorAll("#lista2")[0];
// seleciona mais que um elemento por exemplo por id e por tag

console.log(itensQuery)

var itensQuery2 = document.querySelectorAll("#lista .item");
console.log(itensQuery2)

// querySelector
// pegar um item 

var lista = document.querySelector('#lista')
console.log(lista)

var primeiraLista = document.querySelector("ul")
console.log(primeiraLista)

var span = document.querySelector("#paragrafo span")
console.log(span)