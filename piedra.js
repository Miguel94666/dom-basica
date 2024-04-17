let uno ="piedra";
let dos ="papel";
let tres = "tijera";


 let chido=function juego(jugador,pc){ // tambien se le puede quitar el var y declararlo como function  y llamarla con la funcion juego
    if(jugador!=pc){
    }if(jugador === uno &&  pc===uno){
    console.log("empate")
} else if (jugador === dos &&  pc===uno){
    console.log("ganaste")
     } else if(jugador === uno &&  pc===tres){
            console.log("ganaste") 
}else if (jugador === tres &&  pc===dos){
console.log("ganaste")
} else
    console.log("el usuario gana")
}

chido(uno,tres)