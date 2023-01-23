// class Pesoa{
//     constructor(){
//         this.age = 0
//     }

//     setInterval(function() {
//         this.age++
//     }, 2000);
// }

function Pessoa (){

    // const Pessoa  = this
    this.idade =0 

    // setInterval(function(){
    //     console.log(Pessoa.idade++)

    // }, 2000);

    setInterval(() => {
        console.log(this.idade++)

    }, 2000);
}

const p1 = new Pessoa()

// arrou function
// (p1, p2, ..., px ) => { expresao}
// (p1, p2) => expressao
// p1 => { execucao}

