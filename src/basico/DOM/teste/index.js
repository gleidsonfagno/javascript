const turnOn = document.querySelector("#turnOn")
const turnOff = document.querySelector("#turnOff")
const lamp = document.querySelector("#lamp")

// dar um novo valor a img
// funcao de trcar a img

function islampBroken(){
    return lamp.src.indexOf ( "quebrada") > -1
}

function lampOn () {
    if ( !islampBroken()){
        lamp.src = "ligada.jpg"
    }
}
function lampOff (){
    if( !islampBroken ()){
        lamp.src = "desligada.jpg"
    }
}

function lampBroken(){
    lamp.src = "quebrada.jpg"
}



// preste atencao no click da lanpOn
turnOn.addEventListener( "click", lampOn);

turnOff.addEventListener( "click" , lampOff)

// passar o mouse em cima
lamp.addEventListener( "mouseover", lampOn)

// sair com o mause de cima
lamp.addEventListener( "mouseleave", lampOff)

lamp.addEventListener( "dblclick", lampBroken)