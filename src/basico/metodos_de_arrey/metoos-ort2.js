// podemos resgatar um conjunto de elementos som os metodos

// splice
// colocor elementos no meio da array
// remove elemento especifico
var arr = [1,2,3,4,5];
// entre o dois e tres
arr.splice(2, 0, 999);
// o dois e aonde vai ser colocado e o (0) e o que vai ser deletado e nao vai ser deletado nada e o (999) e o que vai ser adicionado
console.log(arr);


// removendo
arr.splice(4,1)
console.log(arr)

// achar o idce do Elemento
// indexOf

console.log(arr.indexOf(5))


// join
// tranformar o array ne uma string

var arr2 = ['o', 'rato', 'roeu', 'a', 'roupa'];

console.log(arr2.join(", "))


// reverse
// reverter os elementos do arrey
console.log(arr2.reverse())

