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




function informacion(variable){
    resultado.innerHTML = info[select.value][variable]
}


btnInfo.addEventListener("click", () => informacion("infogen"))
btnImg.addEventListener("click", () => informacion("imagen"))
btnCar.addEventListener("click", () => informacion("caracteristicas"))


// () => SE LE LLAMA ARROW FUNCTION, ES OTRA FORMA DE HACER UN FUNCION  BASICAMENTE CREA UNA MINI FUNCION QUE CUANDO SE EJECUTE EL BOTON ESTE LLAME LA INFORMACION("IMAGEN") DE LA BASE DE DATOS