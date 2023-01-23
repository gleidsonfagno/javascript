class Movimentacao {
    constructor(banco = "padrao" , nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0 
        let tipo = " "
        // criando a variavel regex
        const regex = new RegExp('x', 'gi')
        this.movimentacoes.forEach(lancamento => {
            // mudando o valor de x para y

            // lancamento.banco = lancamento.banco.replace(/x$/i, 'y')

            lancamento.banco = lancamento.banco.replace(regex, 'y')

            // se colocar vai filtra tudo sem filtra so o emposto 
            // macht buscar determinado valor regex
            // o sinal !muda so nao sei o que
            if(!lancamento.banco.match(/y/i)){ 
            valorAtualizado += lancamento.saldo
            tipo += lancamento.nome + " | "
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Banck x', 'salario', 20000)
const m02 = new Movimentacao('Banck z', 'comisao', 2000)
const m03 = new Movimentacao('Banck x', 'imposto', -5000)
const m04 = new Movimentacao('Banck y', 'contas', -1000)
const m05 = new Movimentacao('Banck x', 'imposto', -1000)


const registro01 = new Registro(22,10,2022)
registro01.novaMovimentacao( m01, m02, m03, m04, m05)
console.log('o saldo dos registros  foi' + " " + registro01.resumo())


const movimentacoesGerais = [m01, m02, m03, m04, m05]
// com cochetes
// movimentacoesGerais.map( elemento =>{
//     console.log(elemento.banco.length)
// })

movimentacoesGerais.map( elemento =>
    console.log(elemento)
)