// criar Elmento
 var el = document.createElement("div")
//  ;criado elemnto div 

// adicionar uma class para div cria ou elemnto que for criado

el.classList = "div-criada"

console.log(el)

// agora tem que iserir esse elemonto no html
var container = document.querySelector("#container")

// inserindo  elemento filho no container
container.appendChild(el)

// autra forma de inserir elemento no html
// inserBefore() insere antes

var el2 = document.createElement("div");

el2.classList = "div-before";

console.log(el2)

var el3 = document.querySelector("#container .div-criada")

console.log(el3)

// iseriondo na pagina


container.insertBefore(el2, el3)
// container elemento pai com a referencia principal
// el2 elemnto que eu quero inserir
// el3 referencia


