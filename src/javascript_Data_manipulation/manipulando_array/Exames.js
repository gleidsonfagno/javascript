// import { months } from "./months.js";
import  months  from "./months.js";

// filtrar nomes

// let toPrint = months.filter( (months)=> {
//      return months.days === 28
// })

// Filter() filtrar o array meses

const  filteredMonths = months.filter( (months)=> {
     return months.days === 31
})

console.log(filteredMonths)

let toPrint = ""

// forEach() fais as listagem

filteredMonths.forEach(months => {
     toPrint +=  months.months + ", " 
});

// pegando todos os ite da lista
months.forEach(months => {
     toPrint +=  months.months + ", " 
});

// reduce
// reduce ele executa um afuncao com todos os itens do array e devolve um valor unico
// fazer contagem dos dias
let sumMonthDays = filteredMonths.reduce( (prev, next) =>{

     // let sumMonthDays = filteredMonths.reduce( (prev, next) =>{
     
     // console.log(prev.days + next.days)
     return {days: prev.days + next.days}
})

console.log(sumMonthDays)

// map 
// ele devolve separadamente
// let years = months.map((months => {
//      return months.days * 10
// }))

let cachoros = [10, 15, 7, 8 , 9]

// retono individual
let years = cachoros.map( (cachoros => {
     return cachoros *7
}) )

document.querySelector(".main").innerHTML = toPrint + "<br> somas dos dias dos meses selecionados"+ sumMonthDays.days + "<br> idade umana em cachorros:" + years + "anos"

