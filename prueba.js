const nombre = "Juan David";
const lastname = "Castro Gallego";
const completeName = nombre + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");



function presentacion(nombre,lastname,nickname){

    console.log(`Mi nombre es ${nombre} ${lastname} y mi nickname es ${nickname} `)

} 

presentacion("miguel","perez","el mike")


Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
son comparaciones entre dos o mas variables o arreglos para seguir un resultado
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if, switch

el if sirve para comparar dos o mas variables para saber si un valor es verdadero o falso, la otra selecciona varios casos y retorna un valor igual quie el if
¿Puedo combinar funciones y condicionales?

switch (expresión) {
    case valor1:
        // Bloque de código a ejecutar si la expresión coincide con valor1
        break;
    case valor2:
        // Bloque de código a ejecutar si la expresión coincide con valor2
        break;
    default:
        // Bloque de código a ejecutar si ninguno de los casos anteriores coincide con la expresión
}

if (condición) {
    // Bloque de código a ejecutar si la condición es verdadera
} else if (otraCondición) {
    // Bloque de código a ejecutar si otraCondición es verdadera
} else {
    // Bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

let free
let basic
let expert
let expertPlus
const tipoDeSuscripcion = "basic";


if(tipoDeSuscripcion  ==="free"){
    console.log("solo puedes tomar los cursos gratis")
} else if (tipoDeSuscripcion =="basic"){
    console.log("puedes tomar casi todos los cursos de platzi por un mes")
} else if (tipoDeSuscripcion == "expert"){
    console.log("puedes tonmar casi todos los cursos de platzi durante un año") 
}  else if(tipoDeSuscripcion =="expertPlus"){
    console.log("tu y alguien mas puede tomar todos los cursos de platzi durante un año")
}  else{
    console.log ("no tienes suscripcion");
}
 

 suscripcion(free);

 let suscripcion ="free"
 suscripciones =["free", "basic","expert","expertplus"]
 informacion = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

 for (let index = 0; index < suscripciones.length; index++) {
    if (suscripcion ==suscripciones[index]){
    console.log(`si estas suscrito con ${suscripciones[index]} entonces ${informacion[index]}`)
    }
    
 }


 ¿Qué es un ciclo?
 es una condicion que tiene que cumplir una funcion o instruccion si esta se cumple corre una instruccion si no se sale del ciclo
¿Qué tipos de ciclos existen en JavaScript? for, do , while
¿Qué es un ciclo infinito y por qué es un problema?
es cuando no se cumple una funcion y este hace bucle terminando de relantizar la computadora
¿Puedo mezclar ciclos y condicionales? si, mientras declaremos bien las condicionales y estas se cumplan o hagan que termine el ciclo

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i=0;

while(i<5){
    console.log(`el valor de i es ${i}` )
    i++
}

let i=10;

while(i>=2){
    console.log(`el valor de i es ${i}` )
    i++;
}

Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let numero1
let numero2

suma = prompt("dime la suma de 2+2")
if(suma !=4){
console.log("perdiste")
} else{
    console.log("ganaste")
}
let pregunta;
pregunta = prompt("dime la suma de 2+2")
while(respuesta!=4){
    pregunta = respuesta;
}
 ¿¿

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
es una lista de elementos de una sola variable
¿Qué es un objeto?
es una coleccion de datos relacionados con multiples variables en su etorno
¿Cuándo es mejor usar objetos o arrays?
cuando tiene una propiedad nomas muchos elemnentos es mejor un array si tienen mas es mejor un objeto
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?


2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
¿Cómo te fue? 🏆

elementos = [1,2,3,4,5]
function primerElemento(primer){
    console.log(primer[0]);
}

primerElemento(elementos);
_______________________________
elementos = [1,2,3,4,5]

function todosElementos(array){
    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
        
    }
}

todosElementos(elementos)
_______________________________________________

arrayDeElementos =[
    {numero: 1, color: "rojo"},
    {numero: 2, color: "verde"},
    {numero: 3, color: "negro"}
]

function recorrido(array){
    for (let propiedad in array) {
        console.log(array[propiedad])
      
    }
}

recorrido(arrayDeElementos);

objetos= {
    numero: 1,
    caca: 2,
    pepa: 3
}
  


function recorredor(objeto){
    let array =Object.values(objeto) // convierte los objetos en arreglos
for (let index = 0; index < array.length; index++) {
 console.log(array[index]);
}
}


var usuario = {
    username: "usuarioEjemplo",
    password: "contraseña123",
    nombre: "Nombre Ejemplo",
    correo: "usuario@example.com",
    fechaRegistro: "2024-03-19",
    ultimoAcceso: "2024-03-19T12:30:00",
    intentosFallidos: 0,
    estadoCuenta: "activo"
};

function lista(elemento){
    if (usuario[elemento]){
    console.log(usuario[elemento])
    return
    }
console.warn("no existe")
}