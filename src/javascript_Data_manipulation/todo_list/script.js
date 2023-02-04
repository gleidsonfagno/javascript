// (1) vai pegar o que for digitado
const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")

// (5)criando uma arrey vaizia para fazer uma listagem
// const tasks = []


buttonElement.onclick = ev =>{
     // (2) preventDefault(); vai fazerque a padina recarregue e perca as informacoes
     ev.preventDefault();

     // (7) se o valor do input for diferente de vazio execute
     if(inputElement.value !== ""){
     const textElement = document.createElement("span")
     textElement.innerHTML = inputElement.value

     const btnElement = document.createElement("button")
     btnElement.innerHTML = "remover"



       // (8)cria um lemento li a variavel que vai recer o elemento
       const liElement = document.createElement("li")
       // (9) criando elemento novo mai precisa aparecer no DOM poderio colocarum button
     //   liElement.innerHTML = `<span>${inputElement.value}</span>`
     liElement.appendChild(textElement)
     liElement.appendChild(btnElement)

     btnElement.onclick = () =>{
          // essa fincao vai remover o item da lista que for criado
          ulElement.removeChild(liElement)
     }

       // (10)
       ulElement.appendChild(liElement)
     // (6) adicinar elemento no arrey, vei treceber os dados do input
     // so que se nao tiver nada vai adicinar nada para isso faça o if
     // tasks.push(inputElement.value)
     // (3)toda ves que clicar no button depois de captura o evento limpar o input
     inputElement.value = ""; //(4)

     // console.log(tasks)
     }
}