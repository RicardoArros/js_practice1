/* ESTRUCTURAS CÍCLICAS */

/* EXERCISE 0 */

/*
Obtener nº pares y nº impares.
*/

/* JS v1*/

for(let i = 0; i <= 20; i++) {

  if(i % 2 === 0) {
    console.log(`El número ${i} es par.`);

  } else {
    console.log(`El número ${i} es impar.`);
  }

}


/* JS v2*/

let i = 0;

while(i < 10) {

  if(i % 2 === 0) {
    console.log(`El número ${i} es par.`);

  } else {
    console.log(`El número ${i} es impar.`);
  }

  i++;
}



/* EXERCISE 1 */

/*
Crear un for loop que al llegar al elemento nº 5 detenga su ejecución.
*/

/* JS */

for(let i = 0; i < 10; i++) {
  if(i === 5) {
    console.log('Este es el 5');
    break;
  }
  console.log(`Numero: ${i}`);
}

for(let i = 0; i <= 10; i++) {
  if(i === 5) {
    console.log('CINCO');
    continue;
  }
  console.log(`Numero: ${i}`);
}



/* EXERCISE 2 */

/*
Mostrar un producto con descuento.
*/

/* JS */

// const carrito = [
//   {nombre: 'Monitor 27 pulgadas', precio: 400},
//   {nombre: 'Television', precio: 600},
//   {nombre: 'Tablet', precio: 900, descuento: true},
//   {nombre: 'Audifonos', precio: 500},
//   {nombre: 'Teclado', precio: 570},
//   {nombre: 'Celular', precio: 450},
// ];

for(let i = 0; i < carrito.length; i++) {

  if(carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} tiene descuento!` );
    continue;
  }

  console.log(carrito[i].nombre);
}



/* EXERCISE 3 */

/* 
FIZZBUZZ

- 3, 6, 9, 12 -> FIZZ
- 5, 10, 15, 20 -> BUZZ
- 15, 30, 45 -> FIZZBUZZ
*/

for(let i = 1; i < 100; i ++) {

  if( i % 15 === 0) {
    console.log(`${i} FIZZBUZZ`);

  } else if( i % 3 === 0) {
    console.log(`${i} FIZZ`);

  } else if( i % 5 === 0) {
    console.log(`${i} BUZZ`);

  }
}
