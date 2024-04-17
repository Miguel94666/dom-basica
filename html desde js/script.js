const h1 = document.querySelector('h1')

const parrafo = document.querySelector('p')

const clase = document.querySelector('.a')

const identificador = document.querySelector('#b')

const input1 =document.querySelector('#calculo1')
const input2 =document.querySelector('#calculo2')
const botoncal = document.querySelector('#calculoBoton')
const bResultado =document.querySelector('#resultado')
const formulario =document.querySelector('#form')

 formulario.addEventListener('submit',sumar); 
 // cuando es un formulario se agrega el formulario en el evento

function sumar(event){
 //console.log({event})
 event.preventDefault();
  const suma = (parseInt(input1.value)+parseInt(input2.value));

    bResultado.innerHTML= "resultado " + suma;
    
}

addEventListener

console.log ({
    h1,
    parrafo,
    clase,
    identificador
   
})

console.log(h1)

const img = document.createElement('img')

img.setAttribute('src','https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg')

console.log(img)

parrafo.appendChild(img)


 