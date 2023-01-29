// pricipais metodos
// tag
// assesando por tag

var titulo = document.getElementsByTagName('h1')[0]
// no plura vai esta acessans varios elementos por isso usa o [0] selecionar o elemento zero do elemento
console.log(titulo)

var lis = document.getElementsByTagName("li")
console.log(lis[3])
// tem varias tags li emtao seleciona atag 3


// id
// acessando por ID
var paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

// class
// acessando por class

var itensDalista =document.getElementsByClassName("item")
console.log(itensDalista)