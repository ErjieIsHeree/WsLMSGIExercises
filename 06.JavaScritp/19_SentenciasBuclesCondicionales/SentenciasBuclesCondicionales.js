function contarPares(){
    let numero = document.getElementById("contadorPares").value
    let cantidadPares = 0
    for (let i = 0; i < numero; i++) {
        if (i % 2 == 0) {
            cantidadPares++
        }
    }
    pares.value = cantidadPares
}

function conversorTemperatura() {
    if (djfakl.value == "aFahrenheit") {
        temperaturaConvertida.value = temperaturaAConvertir.value * 9 / 5 + 32
    } else if (djfakl.value == "aCelsius") {
        temperaturaConvertida.value = (temperaturaAConvertir.value - 32) * 5 / 9
    }
}

let numeroRandom = Math.floor(Math.random() * 20)
function adivinadorDeNumero() {
    if (numeroUser.value < numeroRandom) {
        pista.value = "El numero introducido es menor"
    } else if (numeroUser.value > numeroRandom) {
        pista.value = "El numero introducido es mayor"
    } else {
        pista.value = "¡Has acertado el número!"
    }
}

function cambiarColorJS() {
    colorJS.style.backgroundColor = color.value
}

function acceder() {
    let name = document.getElementById('nombre').value
    let pass = document.getElementById('contra').value
    if (name == "goku" && pass == "Vegeta777") {
        alert("Bienvenido")
    } else {
        alert("constraseña incorrecta")
    }
}

function generarFibonacci() {
    let x = 0
    let y = 1   
    let z = 0
    if (sePide.value == 0) {
        resultadoFibonacci.value = x
    } else if (sePide.value == 1) {
        resultadoFibonacci.value = y
    } else if (sePide.value > 1) {
        resultadoFibonacci.value = "1.0 / 2.1"
        for (let i = 0; i < sePide.value - 2; i++) {
            z = x + y
            resultadoFibonacci.value += " / " + (i + 3) + "." + z
            x = y
            y = z
        }
    } else {
        alert("error")
    }
}