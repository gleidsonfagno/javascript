let pessoa = {
    nome: 'matheus',
    idade:29,
    falar: function(){
        console.log('ola, tudo bem')
    },
    soma: function(a, b){
        return a + b;
    },

    filosafar: function(){
        // console.log('o que e a vida')
        var soma = 21 + 12
        if(soma >= 37){
            console.log('condiçao verdadeira')
        }else{
            console.log('condicao falsa')
        }
    },

    loop: function(){
        var arr = ['o', 'rato', 'roeu', 'a', 'roupa']
        var y = 0
        while(y <= 4){
            console.log(arr[y]);
            y++
        }
    },
}


console.log(pessoa.nome)

// funcao falar
pessoa.falar()

var soma = pessoa.soma(2, 2)

pessoa.filosafar()
console.log(soma)
pessoa.loop()