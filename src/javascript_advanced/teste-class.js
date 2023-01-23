// class Carro{
//     // construtor  o que e?  ele vai instacia o objeto fazer o que e pedido

//     // cor="azul"
//     constructor(cor){
//         // criar atributos

//         // o this o caro
//         this.cor=cor
//         console.log('ola, eu sou um novo carro' + " " + this.cor)
//     }

// }

// // objeto
// let carro1 = new Carro("vermelho")
// let carro2 = new Carro("azul")
// let carro3 = new Carro("branco")
// let carro4 = new Carro("verde")
// let carro5 = new Carro("amarelo")



// classes = sao modelos ou moldes de objetos
// objetos = sao  abstraçôes ou representaçoês de coisas que existi no mundo
// objetos = instancia ou objeto do tipo | abjeto é um tipode dado

// JS OO CLASSES E OBJETOS

class Pessoa{

    // atributos = variaveis ou caracteristicas
    nome
    idade 
    peso
    altura
    sexo
    email
    telefone


    // metodos = funçoês ou comportamentos
}


// criar novo objetos a partir da class, instanciar
let pessoa1 = new Pessoa()
let pessoa2 = new Pessoa()

// atribuir valores para os atributos de um  objeto

pessoa1.nome = "pedro"
pessoa1.idade = 44
pessoa1.peso= 80.3
pessoa1.altura = 1.77
pessoa1.sexo = "maculino"
pessoa1.email = "pedro123@gmail.com"
pessoa1.telefone = "(91) 99 9877-9879"

pessoa2.nome = "maria"
pessoa2.idade = 44
pessoa2.peso= 80.3
pessoa2.altura = 1.77
pessoa2.sexo = "femenino"
pessoa2.email = "maria123@gmail.com"
pessoa2.telefone = "(91) 999877-9879"

console.log(pessoa1)
console.log(pessoa2)