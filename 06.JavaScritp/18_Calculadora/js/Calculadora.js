function mostrarSuma(){
    let n1 = parseInt(document.getElementById("numeroA").value)
    let n2 = parseInt(document.getElementById("numeroB").value)
    let total = n1 + n2
    resultado.value = total
}
function mostrarResta(){
    let n1 = parseInt(document.getElementById("numeroA").value)
    let n2 = parseInt(document.getElementById("numeroB").value)
    let total = n1 - n2
    resultado.value = total
}
function mostrarMultiplicacion(){
    let n1 = parseInt(document.getElementById("numeroA").value)
    let n2 = parseInt(document.getElementById("numeroB").value)
    let total = n1 * n2
    resultado.value = total
}
function mostrarDivision(){
    let n1 = parseInt(document.getElementById("numeroA").value)
    let n2 = parseInt(document.getElementById("numeroB").value)
    let total = n1 / n2
    resultado.value = total
}