const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkIputs()
})

function checkIputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    // nome
    if(usernameValue === ""){
        // mostrar error
        errorValidatin(username, "prencha esse campo")
    }else{
        // adiciona a class sucsess
        successValidation(username)
    }
    // email
    if( emailValue === ""){
        errorValidatin(email, "prencha esse campo" )
    }else{
        successValidation(email)
    }
    // password
    if(passwordValue === ""){
        errorValidatin(password, "prencha esse campo")

    }else{
        successValidation(password)
    }
}

// funcao se error
function errorValidatin(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "cadastro error"
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = "cadastro success"
}