let select = document.querySelector("#select")
let resultado = document.querySelector("#resultado")
console.log(select.value)

const info = [{
    infogen: "Ejercicio 6",
    imagen: "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/59.jpg",
    caracteristicas: "caracteristicas"
},
    {
    
    }
]



function informacion(){
    if(select.value == "info"){
        resultado.innerHTML = info.infogen
    } else if(select.value == "img"){
        resultado.innerHTML = `<img src="${info.imagen}" alt="">`
    } else if(select.value == "car"){
        resultado.innerHTML = info.caracteristicas
    }
    
}

select.addEventListener("change", informacion)
