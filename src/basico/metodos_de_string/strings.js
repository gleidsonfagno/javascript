// length 
// quantos carcter tem 

var nome = 'gleidsonfagno'

console.log(nome.length)

var obj = 'bola'

console.log(obj.length)

// indexOf
// achar a item por palavra
console.log(nome[2])

var frase = 'o rato roeu a roupa do rei de roma';
console.log(frase.indexOf('roeu'));

// slice
// pegar a frase

var roeu = frase.slice(7, 11)

console.log(roeu)

// replace
// trocar palavra da String

var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase)