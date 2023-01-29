// o texto de um elemento e considerado um no na arvore d DOM ou seja, temos que criar o text do elemnto tambem

// inserir no Body

// 1 createElement()
// vai cria elemento dendo delo coloca o que vai ser crido

var novoParagrafo = document.createElement("p")
// paragrafo criado
console.log(novoParagrafo)

// 2 createTextNode()
// criar um no de texto o conteudo do elemento
var texto = document.createTextNode("esse e o conteudo do paragrafo")


// 3 appendChild junt e cria o elemento com conteudo
// junta o createElement() + o createTextNode() e isere com o appendChild()
// servepara incerir elementos
novoParagrafo.appendChild(texto);


// incerir o no de texto no html 
var body = document.querySelector("body")
// mapiar o Element
console.log(body)

body.appendChild(novoParagrafo)

// inserir em um conatainer

var conatainer = document.querySelector("#container")
console.log(conatainer)
// seleciona o elemento pai mapia

var el = document.createElement('span')
// cra o um elemento

el.appendChild(document.createTextNode('texto span'))
// cria o cnteudo para inserir no elemento

console.log(el)

conatainer.appendChild(el)
// junta e imprime no documento


function Criar(){
    var div = document.querySelector("#img")
    const img = document.createElement("img")
    img.src = ('Google.png');
    div.appendChild(img);
}
