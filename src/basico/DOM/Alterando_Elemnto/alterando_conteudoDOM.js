// podemos alterar o text de qualquer elemento de forma facil com javascript

// seleciona o elemento
var title = document.querySelector("#title")
console.log(title)

const img = document.querySelector("#img")
// duas formas de alterar o dom
// innerHtml
// textContent -> main utilizado, ecomendado e perfomatico escolha essa opiçao

// innerHtml
title.innerHTML = 'testando alteraçao'
img.innerHTML = "meu teste"

// textContent -> main utilizado, ecomendado e perfomatico escolha essa opiçao
var subtitle = document.querySelector(".subtitle")
console.log(subtitle)
subtitle.textContent = "testando textContent"
