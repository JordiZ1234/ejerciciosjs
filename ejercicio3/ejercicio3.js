let input = document.querySelector("#input")
let titulo = document.querySelector("#titulo")
function tiempo(){
    titulo.innerHTML = input.value
}

input.addEventListener("input", tiempo)