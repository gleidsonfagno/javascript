const user01 = new Object()

user01.id = 1
user01.nome = "joao"
user01.idade = 25

const user02 = new Object()
user02.id = 2
user02.nome = "Pedro"
user02.idade = 30

const user03 = new Object()
user03.id = 3
user03.nome = "Maria"
user03.idade = 28

const car01 = new Object()
car01["marca"] = "fiat"

const car02 = new Object()
car02["marca"] = "ford"


// para obter achave dos valore usa keys
// console.log(Object.keys(user01))
// console.log(Object.keys(user02))
// console.log(Object.keys(user03))
// console.log(Object.keys(car01))
// console.log(Object.keys(car02))

// para obter o valor
// console.log(Object.values(user01))
// console.log(Object.entries(user02))
// console.log(Object.values(user03))

// colocar o valor e as chaves
// console.log(Object.entries(car01))
// console.log(Object.entries(car02))

user01.idade = user01.idade + 1

console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf' ,{
    // vai autorizar a visualizacao do dado nao e inumeravel
    enumerable: true,
    // vai negar a troca do cpf dado sigilozo
    writable: false, 
    value: '000.000.000.00'
})

// trocando dados 
user01.cpf = "111.111.111.11"

console.log(Object.entries(user01))

console.log(user01)

const empresa = "EBA"

user01.empresa = empresa
user02.empresa = empresa
user03.empresa = "google"

console.log(user01)
console.log(user02)
console.log(user03)

user01.filhos = {
    filho01 : "matheus",
    filho02 : "carol"
}

console.log(user01)

console.log(Object.entries(user01.filhos))