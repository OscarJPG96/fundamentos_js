//CILCO - WHILE SE REPITE MIENTAS LA CONDICION SEA VERDADERA

/* BOOCLE INFINITO
while (true) {
    console.log("llenando memoriA RAM")
} */

let i = 0;
while (i <= 10) {
    console.log(i)
    i++;
}

// validacion de contraseña

let contrasena_servidor = "sena123";
let contrasena_usuario = "sena123";
while (contrasena_servidor !== contrasena_usuario) {
    console.log("clave incorrecta intentelo de nuevo");
}
console.log("clave correcta bienvenido al siatema");

// apop entrada a un bar

let edad = 16;
while (edad <=18) {
    console.log("no puedes entrar al bar. erers menor de adad");
    edad++
}
console.log("bienvenido al bar");


let cantidad_agua = 0;
while (cantidad_agua <10) {
    console.log("riego las plantas con" + cantidad_agua + "litros de agua");
    cantidad_agua++
}
console.log("todala las plantas regadas");


//ciclo do - while

 let  numero = 11;
 do{
    console.log(numero);
    numero++;
 }while (numero <=10);

//sentencia break: permite salir de un boocle antes de que temine
for (let i =1; i <=10; i++){
    if (i===5){
       console.log("se ha alcanzado el numero 5");
        break;
    }
    console.log(i);
}

// app bar con break


for (let edad_cliente = 1; i<=20; i++){
    if(edad_cliente < 18){
        console.log("no puedes entrar al bar, eres menor de edad");
        break;
    }else{
        console.log ("bienvenido al bar!!!");
    }
}

//sentencia continue salta

for(let i=1; i<=10; i++){
    if (i === 5){
        console.log("se salto el numero")
        continue;
    }
    console.log(i)
}