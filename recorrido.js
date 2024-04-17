

/*     constructor(nombre,costo){
        this.nombre= nombre
        this.costo = costo
    }
}
let bici = new articulos("maruchan",50) */

var articulos =[
{nombre: "bici",costo: 4000},
{nombre: "tv",costo:4000},
{nombre: "hentai", costo:300},
{nombre: "laptop",costo: 40000},
{nombre: "lolis",costo:43000},
{nombre: "FBI", costo:30000}
]

var articulosFiltrado = articulos.filter(function(articulo){ //ayuda a buscar el articulo depende de el codigo que pongas como un filtro
    return articulo.costo <= 4000
})


var nombreArticulos = articulos.map(function(articulo){ // sintaxis de mapear todo los datos de un campo o columna
    return articulo.nombre
})


articulos = []

var nombre = prompt("ingresa el nombre del articulo y costo")




articulos.push(nombre,costo);