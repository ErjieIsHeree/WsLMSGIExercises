
//--------------------Promedio-----------------------

let arrayPromedios = []
let media = 0

function guardarNumeroEnPromedio(){
    arrayPromedios.push(parseFloat(document.getElementById("numeroDePromedio").value))
}

function calcularPromedio(){
    for (nP in arrayPromedios){
        media += arrayPromedios[nP]
    }
    media = media / arrayPromedios.length
    document.getElementById("resultadoPromedio").value = media
}

//---------------------MayorElemento-----------------

let arrayME = []
let mayorNumero = 0

function guardarNumeroEnME(){
    arrayME.push(parseFloat(document.getElementById("numeroDeME").value))
}

function mostrarME(){
    for (nME in arrayME){
        if (arrayME[nME] > mayorNumero)
            mayorNumero = arrayME[nME]
    }
    document.getElementById("resultadoME").value = mayorNumero
}

//---------------------ContarParesEImpares-------------------

let arrayNumeros = []
let numerosPares = 0
let numerosImpares = 0

function guardarNumeros(){
    arrayNumeros.push(document.getElementById("numeroDePeI").value)
}

function contarParesEImpares(){
    for (nPoI in arrayNumeros) {
        if (arrayNumeros[nPoI] % 2 == 0){
            numerosPares++
        } else {
            numerosImpares++
        }
    }
    document.getElementById("resultadoNumerosPoI").value = "Pares= " + numerosPares + " Impares= " + numerosImpares
    numerosPares = 0
    numerosImpares = 0
}
