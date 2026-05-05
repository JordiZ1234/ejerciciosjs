console.log("ejercicio 1")
let nombre = document.querySelector("#nombre")
let password = document.querySelector("#contraseña")
let btn = document.querySelector("#btn")
let resultado = document.querySelector("#resultado")

console.log(nombre)


function alerta(){
    alert(`hola ${nombre.value} tu contraseña es: ${password.value}`)
    console.log(`hola ${nombre.value} tu contraseña es: ${password.value}`)
    resultado.innerHTML = `hola ${nombre.value} tu contraseña es: ${password.value}`
} 

btn.addEventListener("click", alerta)
