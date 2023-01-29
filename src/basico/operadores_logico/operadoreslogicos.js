let nome = "joao"
const idade = 16;

if(nome == "joao" && idade == 16){
    console.log(` o ${nome}, tem ${idade} anos e pode entrar na sala`)
}else{
    console.log("este nao e o joao");
}

if(1 == 1 && 3 > 2 && true){
    console.log("passou");
}

if( (1 == 1 && 3 > 2) && true){
    console.log("passou");
}else if(nome === "joao" && idade >= 14){
    console.log("aqui passol");
}

console.log("o nome juao tem " + nome + " letras")

const biologia = 10
const matematica = 10
const resutado = biologia + matematica



if(resutado >= 20){
    console.log(`${nome} voce passou, em biologia voce tirou ${biologia} e matematica ${matematica}, [PADABENS].`)
}else{
    console.log(`${nome} nao foi dessa vez ten na proxima`)
}