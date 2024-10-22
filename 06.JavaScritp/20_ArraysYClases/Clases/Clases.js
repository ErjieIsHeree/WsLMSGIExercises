class Ordenador{
    precio
    procesador
    tarjetaGrafia
    placaBase
    listaRAMs
    listaPerifericos

    calcularPrecio(){
        this.precio = this.procesador.precio + this.tarjetaGrafia.precio + this.placaBase.precio
        for (let ram of this.listaRAMs){
            this.precio += ram.precio
        }
    }
}

class Procesador{
    marca
    modelo
    numeroNucleos
    precio
}

class TarjetaGrafia{
    marca
    modelo
    nucleosCUDA
    precio
    ram
}

class PlacaBase{
    marca
    precio
    tipo
}

class RAM{
    marca
    capacidad
    precio
}

class Periferico{
    tipo
    marca
    precio
}

let pc = new Ordenador()
pc.procesador = new Procesador()
pc.tarjetaGrafia = new TarjetaGrafia()
pc.placaBase = new PlacaBase()
pc.listaRAMs = [new RAM(), new RAM(), new RAM(), new RAM()]
pc.listaPerifericos = [new Periferico(), new Periferico(), new Periferico, new Periferico()]

pc.procesador.precio = 80.50
pc.tarjetaGrafia.precio = 200.29
pc.placaBase = 70.95
pc.listaRAMs[0].precio = 40.00
pc.listaRAMs[1].precio = 40.00
pc.listaRAMs[2].precio = 40.00
pc.listaRAMs[3].precio = 40.00
pc.listaPerifericos[0].precio = 12.50
pc.listaPerifericos[1].precio = 12.50
pc.listaPerifericos[2].precio = 12.50

pc.procesador.marca = "AMD"
pc.tarjetaGrafia.marca = "NVIDIA"
pc.placaBase.marca = "MSI"
for (n in listaRAMs) {
    pc.listaRAMs[n].marca = "Corsair"
    if (n < 3){
        pc.listaPerifericos[n].marca = "Corsair"
    }
}

//El resto es todo rellenar y ya demostré que sé rellenar :c

