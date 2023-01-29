// toLoweCase e toUpperCase
// minuscula e maiuscula

var frase = 'Esta e a frase que vamos manipular';

console.log(frase.toLowerCase())
var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toUpperCase())

console.log(frase.toLowerCase())

// trim
// eleminar espaços em branco

var nome = '         matheus        ';

console.log(nome.trim())
var nomeTrim = nome.trim();

console.log(nome); //com espaço
console.log(nomeTrim); //removendo espaço


// split
// separar string

console.log(frase.split(' '));

var tags = 'php, javascript, html, css';

console.log(tags.split(', '))

// lastIndexOf
// selecionar por frase, porem seleciona a ultima

var fraseDois = 'eu quero a última palavra teste dessa palavra teste';

console.log(fraseDois.indexOf('teste')) // selecion a primeira palavra da frase :index  

console.log(fraseDois.lastIndexOf('teste')); //seleciona a ultima palavra da frase :index