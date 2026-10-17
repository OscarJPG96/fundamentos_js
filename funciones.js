// FUNCIONES

//FUNCION SIMPLE

//delarar
function saludar() {
    console.log("Hola Mundo !");
}
//llamarla
saludar();

//FUNCION CON PARAMETROS

function saludoPersonalizado(nombre, apellido, ) {
    console.log("hola " + nombre + apellido);
    console.log(`hola ${nombre} ${apellido}`) //interpolacion
}
saludoPersonalizado("Oscar ", "perez");
saludoPersonalizado("diana ", "castillo");
saludoPersonalizado("muguel ", "bose");
saludoPersonalizado("adriana ", "nosa");

//FUNCION CON PARAMETROS POR DEFECTO

function bienvenidaSena(nombre, programa="adso") {
    console.log(`Hola Aprendiz ${nombre} del programa ${programa}`);
}

bienvenidaSena("felipe");
bienvenidaSena("pepito", "mineria");

//FUNCION CON PARAMETROS DESORDENADOS

function calcularEdad(nombre, anioNacimiento) {
    let edad = 2026 - anioNacimiento;
    console.log(`hola ${nombre}, tu edad es ${edad} años`)
}

calcularEdad("felipe", 1994);
calcularEdad("oscar", 1996);

//FUNCION CON RETORNO DE VALOR

function calcularPromedio(num1, num2, num3) { //entrada de los datos
    let resultado = (num1 + num2 + num3)/3; // proceso de los datos
    return resultado; // salida de los datos
}
let result = calcularPromedio(4,3,5) //guardar el resultado
console.log(`el resultado del promedio es: ${result}`); // imprimir el resultado

/*function clasificar(promedio) {
    if (promedio >= 4.5){
        return "exelente";
    }
    if (promedio >= 3.5){
        return "aceptable";
    }
    if (promedio >= 3.0){
        return "debe reforzar";
    }
    
}*/

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}

console.log(sumar(2,7));
console.log(restar(2,7));
console.log(multiplicar(2,7));
console.log(dividir(2,7));

function calculadora(num1, num2, opcion) {
    swhitch(opcion){
        case 1:
            return sumar(num1, num2);
        case 2;
            return restar( num1, num2);
        case 3:
            return multiplicar(num1, num2),
        case 4:
            return dividir(num1, num2);
        default:
            return "opcion no valida";
    }
}
console.log(calculadora(sumar(5,3,1))); //sumar
console.log(calculadora(restar(5,3,2))); //restar
console.log(calculadora(multiplicar(5,3,3))); //multiplicar
console.log(calculadora(dividir(5,3,4))); //dividir