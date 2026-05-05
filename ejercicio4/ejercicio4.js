let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let resultado = document.querySelector("#resultado")

function imagen(){
    resultado.innerHTML = `<img src="${input.value}" alt="">` 
}
 btn.addEventListener("click", imagen)