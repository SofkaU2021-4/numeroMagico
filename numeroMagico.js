const max = 100;
const min = 1;
let intentos = 5;
let numeroSecreto = parseInt(Math.random()*(max-min)+min);
let mensaje = `Por favor ingrese un número para adivinar el número mágico entre ${max} y ${min}. 
Oprime 0 para salir. Tienes ${intentos} intentos`;

console.log(numeroSecreto)

while (intentos > 0){
    let numeroElegido = parseInt(prompt(mensaje, 0));
    console.log(numeroElegido);
    intentos--;
    if(numeroElegido === 0){
        intentos=-1;
    }else if(numeroElegido > numeroSecreto){
        mensaje =  `Tu número es mayor al numero mágico. Te quedan ${intentos} intentos`
    }else if(numeroElegido < numeroSecreto){
        mensaje =  `Tu número es menor al numero mágico. Te quedan ${intentos} intentos`
    }else if(numeroElegido === numeroSecreto){
        alert(`Felicidades!!!!!!!!!!! ganaste, Encontraste el numero magico. Ganaste en ${5-intentos} intentos `)
        intentos=-1;
    }else{
        alert("ERROR. Ingresaste un valor no numérico ");
        intentos=-1;
    }

}
intentos === 0 ?  (alert("Game over. No lograste encontrar el número mágico")):(null)







