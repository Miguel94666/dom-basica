let pregunta = prompt("ingresa piedra, papel o tijera");
let jugador = pregunta.toLowerCase();
let opciones = ["piedra","papel","tijera"]
var pc = opciones[Math.floor(Math.random() * 3)];

switch (true) {
    case jugador == "piedra" &&  pc=="piedra": 
        console.log("empate")
        break;
        case jugador == "papel" && pc =="piedra":
        console.log("ganaste")
        break;
        case jugador == "tijera" && pc== "papel":
            console.log("ganaste")
            break;
        case jugador == "papel" && pc== "piedra":
            console.log("ganaste")
            break;
    default: "perdiste papu"
        break;
}

