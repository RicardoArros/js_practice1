/* JS - EJERCICIOS DOM */

/* EJERCICIO 08 */

/* 
PLANTEAMIENTO DEL PROBLEMA:

Desarrolle un diagrama de flujo que permita leer 100 números ingresados por teclado. 
El algoritmo debe permitir contar los números negativos, positivos y ceros. 
Al finalizar debe mostrar un mensaje con el detalle de los resultados.
*/

/* 
PSEUDOCODIGO:

1.- Inicio

2.- Definir cantidadNegativos = 0, Definir cantidadPositivos = 0, Definir cantidadCeros = 0, Definir contador = 0;

3.- Definir contador += 1;

4.- Escribir "Ingrese un numero: ";

5.- Leer numero;

6.- Si numero == 0, Entonces leer cantidadCeros += 1;

7.- Sino, numero < 0, Entonces leer cantidadNegativos += 1;

8.- Sino, leer cantidadPositivos += 1;

9.- Si contador <= 100, Entonces

10.- Escribir "",;

11.- Fin
*/

/* JAVASCRIPT */

const ejercicio2 = () => {
  //
  let cantidadNegativos = 0;
  let cantidadPositivos = 0;
  let cantidadCeros = 0;

  //
  for (let i = 1; i <= 3; i++) {
    //
    let number = Number(prompt('Ingresar un numero: '));

    //
    if (number == 0) {
      cantidadCeros += 1;
    } else if (number < 0) {
      cantidadNegativos += 1;
    } else {
      cantidadPositivos += 1;
    }
  }

  const message = `
    1.- La cantidad de numeros negativos es ${cantidadNegativos}.\n
    2.- La cantidad de numeros positivos es ${cantidadPositivos}.\n
    3.- La cantidad de numeros ceros es ${cantidadCeros}.
  `;

  console.log(message);
};

ejercicio2();
