import { Cachorro } from "./import"

class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar(){
        console.log(this.especie + " fala ")
    }

    comer(){
        console.log(this.especie + " come ")
    }

    dormir(){
        console.log(this.especie + " dorme ")
    }

}

// nova classe
class Cachorro extends Animal{
    falar(){
        console.log(this.especie + " au au au")
    }

    comer(){
        console.log(this.especie + " come racao ")
    }
}


// rodar no terminal
// const cachorro = new Cachorro("cachorro")
// cachorro.falar()
// cachorro.comer()
// cachorro.dormir()

export default Cachorro;