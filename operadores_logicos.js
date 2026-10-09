//operadores logicos
// el resultado siempre sera o true o false

// and simbolo en js(&&) si ambas condiciones son verdaderas
 console.log(true && true);// true
  console.log(true && false);//false
   console.log(false && true);//false
    console.log(false && false);//false

    let edad = 60;
    let sem_cotizadas = 1500;
    console.log(edad >= 62 && sem_cotizadas >= 1300); // false

    
// or (||) devielve true si almenos uno de los operadores es verdadero
 console.log(true || true);// true
  console.log(true || false);//true
   console.log(false || true);//true
    console.log(false || false);//false


let calificacion = 90;
let inasistencias = 5;
console.log(calificacion >= 70 || inasistencias <= 3);//true

// not es inverso si es true sale false y bisebersa

console.log(true);// true
console.log(false);//false
