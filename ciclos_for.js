// CICLOS O BUCLES -LOOPS
// FOR con incremento

for (let i = 1; i <= 10; i++) { //agregar de 1 en 1
    console.log(i)
}

for (let q = 0; q <= 10; q+=2) { //agregar de 2 en 2
    console.log(q)
}

/*for (let w = 12; w <= 10; i++) {  por el numero 12 no hace nada
    console.log(w)
}*/

// FOR con decremento

for (let e = 5; e>1; e--) {
    console.log(e)
}
console.log("feliz año!!!")

//tablas de multiplicar del 7

for (let m = 1; m <= 10; m++) {
    console.log(`la multiplicacion de 7 X ${m} = ${7*m}`)
}

// for - of para recorrer arreglos  es una cadena de varios datos en una sola variable
let nombre1 = ["felipe", "miguel", "adriana", "alejandra", "oscar"];
//console.log (nombre1.length); longitud
for (let nombre of nombre1) {
  console.log(nombre)
    
}

let frutas =["mango", "pera", "durazno", "banano", "manzana", "fresa"];
for (let frut of frutas) {
    console.log(frut)
}