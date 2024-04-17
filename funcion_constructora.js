class auto {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
}

var autos= []

var marca = prompt("elige una marca");
var modelo = prompt ("elige un modelo");
var anio  = prompt ("elige un anio");

var autonuevo = new auto (marca,modelo,anio)

autos.push(autonuevo);