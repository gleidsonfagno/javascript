// adicionar e remover elementos

// length saber o numero de elemeto

var arr = [1,2,3,4,5]
console.log(arr.length)

// push adicionar elemento no arrey
arr.push(6);
arr.push('qualquer coisa')

console.log(arr)

// pop remover o elemento do fim do arrey
arr.pop()
console.log(arr);

// unshift adicionar elemento no inicio do arrey
arr.unshift(0)
arr.unshift('teste')
console.log(arr)

// shift remove elemento do começo da arrey

arr.shift()

console.log(arr)

// asssesar o ultimo elemento do arrey
console.log(arr[arr.length -1])

// isArray verificar se objeto e um arrey

console.log(Array.isArray(5))

console.log(Array.isArray(arr))