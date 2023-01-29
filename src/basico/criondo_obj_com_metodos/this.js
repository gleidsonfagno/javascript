// fora do escopo global window
// em objetos o this vai se referir a instancia e pode acesaar sua proprias propriedade

console.log(this);
var teste = 5

console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: 'gleidson',
    idade:29,
    falar: function(){
        console.log('ola, tudo bem')
    },
    dizerNome: function(){
        console.log('o meu nome e ' + this.nome);
    },
    // alterar prpriedade
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr.' + this.nome;
    }
}


console.log(pessoa.idade)
pessoa.aniversario()
pessoa.aniversario()
pessoa.aniversario()
console.log(pessoa.idade)

var cdc = pessoa.saudacao()

console.log('ola, ' + cdc)

pessoa.dizerNome()