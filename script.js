//fundamentos de javascript


//variables y tipos de datos
/*una variable es un espacio
 en memoria que guarda un dato*/

 //declaracion de variable
 let nombre = "oscar";
 nombre = "javier";
 console.log(nombre);

 //declaracion de constantes
 const apellido ="perez";
 //apellido = "gutierrez";
 console.log(apellido);

 //tipos de datos primitivos
 /* string --- cadena de texto
 number --- numeros entertos y decimales
 boolean --- true or false */
 let programa = "adso";
 let ficha =3233140;
 let activa = true;
 let promedio;
 let nota = null;

 console.log(typeof programa); //string
 console.log(typeof ficha);  // number
 console.log(typeof activa);  //boolean
  console.log(typeof promedio);  //underfined por si se llena en algun futuro
 console.log(typeof nota);  //null por si se llena en algun futuro la mas recomendable