let btnInfo = document.querySelector("#btnInfo")
let btnImg = document.querySelector("#btnImg")
let btnCar = document.querySelector("#btnCar")
let resultado = document.querySelector("#resultado")


const info = {
    infogen: "Ejercicio 6",
    imagen: "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/59.jpg",
    caracteristicas: "caracteristicas"
}

function informacion(){
    resultado.innerHTML = info.infogen
}

btnInfo.addEventListener("click", informacion)

function imagen(){
    resultado.innerHTML = `<img src="${info.imagen}" alt="">`
}

btnImg.addEventListener("click", imagen)

function caracteristicas(){
    resultado.innerHTML = info.caracteristicas
}

btnCar.addEventListener("click", caracteristicas)