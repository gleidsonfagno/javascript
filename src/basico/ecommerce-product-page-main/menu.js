function abrirMenu(){
     document.querySelector(".nav").style.width = "50%"
     document.querySelector("body").style.background = "#ccc"
}

function fecharMenu(){
     document.querySelector(".nav").style.width = "0"
     document.querySelector("body").style.background = "none"
}



function OpenCar(){
     document.querySelector(".carinho-open").style.display = "block"
     document.querySelector(".fecha").style.display = "block"
}

function CloseCar(){
     document.querySelector(".carinho-open").style.display = "none"
     document.querySelector(".fecha").style.display = "none"
}

function Delete(){
     document.querySelector(".left").style.display = "none"
     document.querySelector(".right").style.display = "none"
     // document.querySelector(".texto").style.display = "block"
     // document.querySelector(".texto").innerHTML = "<spa>Your cart is empty.</span>"

     document.querySelector(".carinho-open").style.width = "340px"

     document.querySelector(".texto").style.display = "block"
}