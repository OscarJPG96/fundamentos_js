//EATRUCTURAS CONDICIONALES

//IF
if (true){
    //BLOQUE DE CODIGO

}

//ejemplo

let evidencia = 4.0;
if(evidencia >= 3.5){
    console.log("el resultado es aprobado");
}else{
    console.log("el resultado no fue aprobado");
}

//IF  ELSE IF

// CLASIFICACION DE EDADES

let edad = 78;

if (edad <= 13){ 
    console.log("ERES UN NIÑO");
}else if (edad <=18) {
     console.log("ERES UN ADOLESENTE");
}else if (edad <=60){
     console.log("ERES UN ADULTO");
}else {
     console.log("ERES UN ADULTO MAYOR");
}


//EJEMPLI DE IF ANIDADO PENCION
let edadActual = 29;
let semanas_cotizadas = 460;
let genero = "masculino";


if (genero =="femenino"){
    if(edadActual >=57){
        if(semanas_cotizadas >=1250){
        console.log("felicitaciones te pencionaste");
        }else{
            console.log("lo siento no tienes las semanas suficientes para pencionarte");
        }
    }else{
        console.log("lo siento pero no tienes la edad para pencionarte");
    }
}else if (genero == "masculino"){
     if(edadActual >=62){
        if(semanas_cotizadas >=1300){
        console.log("felicitaciones te pencionaste");
        }else{
            console.log("lo siento no tienes las semanas suficientes para pencionarte")
        }
    }else{
        console.log("lo siento pero no tienes la edad para pencionarte");
    }
}else {
    console.log("lo siento no puedo calcular la pencion para esos parametros");
}

//CONDICIONALES CON OPERADORES LOGICOS

// INICIO DE SESION

let correo = "sena@gmail.com";
let contraseña = "12345";

if (correo == "sena@gmail.com" && contraseña == "12345"){
    console.log("bienvenido al sistema");
}else{
    console.log("coreeo o contraseña incorrectos");
}


// condicional con operador logico or

//proceso de certificacion sena

let etapa_lectiva = true;
let etapa_practica = false;
if (etapa_lectiva || etapa_practica){
    console.log("felicitaciones te certificaste!! ")
    
}else{
    console.log("lo siento no cumples con los requisitos de certificacion")
}


//operador ternario

let nota = 2.6;
let resultado =(nota >=3.5)? "aprobado": "no aprobado";
    console.log(resultado);


//switch - dias de la semana

let dia= 4;


switch (dia) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("dia no valido");
        break;
}

//RETO: CALCULADORA CON un menu manejando SWITCH
let numero_1 = Number(prompt("digita el numero 1: "));
let numero_2 = Number(prompt("digita el numero 2: "));
let opcion = Number(prompt("dijita el numero de la opcion que correspponda: 1.suma, 2.resata, 3.multiplicar, 4.dividir "));

switch (opcion) {
    case 1:
        console.log("la suma es: " + (numero_1 + numero_2));
        break;
    case 1:
        console.log("la resta es: " + (numero_1 - numero_2));
        break;
    case 1:
        console.log("la multiplicacion es: " + (numero_1 * numero_2));
        break;
    case 1:
        console.log("la divicion es: " + (numero_1 / numero_2));
        break;        
    default:
        break;
}