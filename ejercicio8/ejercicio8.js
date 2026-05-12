let select = document.querySelector("#select")
let btnInfo = document.querySelector("#btnInfo")
let btnImg = document.querySelector("#btnImg")
let btnCar = document.querySelector("#btnCar")
let resultado = document.querySelector("#resultado")

const info = [
    {
    infogen: "persona 1",
    imagen: `<img src="https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/59.jpg" alt="">`,
    caracteristicas: "super rapido"
    },
    {
    infogen: "persona 2",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNS-nHlfxSHpI9ozmLP9nVT492FQtdR9u9FMo0j54YAXIwmhMuNOiP3jWrrV06E2liYFv603eg9Uu_XptjTn0XQSRQ9dKP4f6GaacC4gl7&s=10",
    caracteristicas: "super inteligente"
    },
    {
    infogen: "persona 3",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7FU5t_BVq2WxsjW-WB1EzkCZGwwqQ3Cl8w&s",
    caracteristicas: "super fuerte"
    },
]



function informacion(){
    resultado.innerHTML = info[select.value].infogen
}

function imagen(){
    resultado.innerHTML = info[select.value].imagen
}

function caracteristicas(){
    resultado.innerHTML = info[select.value].caracteristicas
}

btnInfo.addEventListener("click", informacion)
btnImg.addEventListener("click", imagen)
btnCar.addEventListener("click", caracteristicas)


