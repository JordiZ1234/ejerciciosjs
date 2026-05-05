let select = document.querySelector("#select")
let select2 = document.querySelector("#select2")
let select3 = document.querySelector("#select3")
let resultadoC = document.querySelector("#resultadoC")
let resultadoS = document.querySelector("#resultadoS")
let resultadoB = document.querySelector("#resultadoB")

function outfit(){
    resultadoC.innerHTML = `<img src="${select.value}" alt="">`
}
function outfit2(){
    resultadoS.innerHTML = `<img src="${select2.value}" alt="">`
}
function outfit3(){
    resultadoB.innerHTML = `<img src="${select3.value}" alt="">`
}
select.addEventListener("change", outfit)
select2.addEventListener("change", outfit2)
select3.addEventListener("change", outfit3)