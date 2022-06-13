/* ESTRUCTURAS CONDICIONALES */

/* EXERCISE 0 */

/*
Realizar un algoritmo para determinar si un número es + o -. 
*/

/*
Inicio
  leer n
  si n > 0 entonces
    Imprimir n, "es positivo"
  sino
    Imprimir n, "es negativo"
  fin_si
Fin   
*/

const number = Number(prompt("Digite un n°: "));

// const result = () => number > 0 ? 'Es positivo' : 'Es negativo';

const result = () => {
  if (number > 0) {
    return "Es positivo";

  } else if (number === 0) {
    return "Es cero";

  } else {
    return "Es negativo";

  }
};

console.log(result());



/* EXERCISE 1 */

/*
Ingrese un numero entero y reportar si es par o impar.
*/

/*
Proceso ejercicio1
	definir num como entero;
	
	escribir "Digite un numero: ";
	leer num;
	
	si num mod 2 = 0 Entonces
		escribir "El numero ",num, " es par";
	SiNo
		escribir "El numero ",num, " es impar";
	FinSi	
FinProceso  
*/

const number = Number(prompt("Digite un n°: "));

// const result = () => number % 2 === 0 ? 'Es par' : 'Es impar';

const result = () => {
  if (number % 2 === 0) {
    return "Es par";

  } else if (number === 0) {
    return "Es cero";

  } else {
    return "Es impar";

  }
};

console.log(result());



/* EXERCISE 2 */

/*
Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobará si su 
promedio de 3 calificaciones es mayor o igual a 70; reprueba caso contrario.
*/

/*
Proceso ejercicio2
	Definir nota1,nota2,nota3 Como Real;
	Definir notasPromedio Como Real;
	
	Escribir 'Digite las 3 calificaciones: ';
	Leer nota1,nota2,nota3;
	
	notasPromedio <- (nota1 + nota2 + nota3) / 3;
	
	Si notasPromedio>=5.0 Entonces
		Escribir 'El estudiante esta aprobado con: ',notasPromedio;
	SiNo
		Escribir 'El estudiante esta reprobado con: ',notasPromedio;
	FinSi
FinProceso
*/

/* JS */

const nota1 = Number(prompt("Digite la calificación 1: "));
const nota2 = Number(prompt("Digite la calificación 2: "));
const nota3 = Number(prompt("Digite la calificación 3: "));

const notasPromedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

const result = () =>
  notasPromedio >= 5.0
    ? `El estudiante esta aprobado con un: ${notasPromedio}`
    : `El estudiante esta reprobado con un: ${notasPromedio}`;

const result = () => {
  if (notasPromedio >= 5.0) {
    return `El estudiante esta aprobado con un: ${notasPromedio}`;
  } else {
    return `El estudiante esta reprobado con un: ${notasPromedio}`;
  }
};

console.log(result());



/* EXERCISE 3 */

/*
En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100. 
¿Cuál será la cantidad que pagará una persona por su compra? (Diagrama N-S).
*/

/* 
Proceso ejercicio3
	definir compra como real;
	definir descuento, precio_final como real;
	
	Escribir "digite la cantidad a pagar: ";
	Leer compra;
	
	Si compra > 100 Entonces
		descuento <- compra * 0.2;
	SiNo
		descuento <- 0;
	FinSi
	
	precio_final <- compra - descuento;
	
	Escribir "El precio a pagar es: ",precio_final;
FinProceso
*/

/* JS */

const compra = parseFloat(prompt("Digite la cantidad a pagar: "));

let descuento;

if (compra > 20.0) {
  descuento = compra * 0.2;

} else {
  descuento = 0;

}

const precioFinal = compra - descuento;

const result = () => `El precio a pagar es: ${precioFinal}`;

console.log(result());

function ejercicio3(compra, descuento) {
  if (compra > 20000) {
    descuentoTotal = compra * descuento;

  } else {
    descuentoTotal = 0;

  }

  const precioFinal = compra - descuentoTotal;

  const result = () => `El precio a pagar es: ${precioFinal}`;

  console.log(result());
}

ejercicio3(34000, 0.2);



/* EXERCISE 4 */

/*
Leer 2 números; si son iguales, que los multiplique. Si el primero es > que el 
segundo que los reste, y si no, que los sume (Pseudocódigo).
*/

/*  
Proceso ejercicio4
	definir num1, num2, resultado como real;
		
	escribir "Digite dos numeros: ";
	leer num1, num2;
	
	Si num1 = num2 Entonces
		// Si son iguales, multiplicamos
		resultado <- num1 * num2;
		
	SiNo
		// Si el 1° es >, restamos
		Si num1 > num2 Entonces
			resultado <- num1 - num2;
			
		SiNo
			// 
			resultado <- num1 + num2;
		FinSi		
	FinSi
	
	Escribir "El resultado es: ",resultado;	
FinProceso
*/

/* JS */

const num1 = Number( prompt('Digite un numero: ') );
const num2 = Number( prompt('Digite otro numero: ') );

let resultado;

if( num1 === num2) {
 resultado = num1 * num2;

} else if(num1 > num2) {
	resultado = num1 - num2;

} else {
	resultado = num1 + num2;

}

const result = () => `El resultado es: ${resultado}`;

console.log( result() );



/* EXERCISE 5 */

/*
Leer 3 n° diferentes e imprimir el n° mayor de los 3 (Diagrama de Flujo).
*/

/*  
Proceso ejercicio5
	definir num1, num2, num3 como reales;
	
	Escribir "Digite 3 numeros diferentes: ";
	Leer num1, num2, num3;
	
	Si num1 > num2 y num1 > num3 Entonces
		Escribir "El mayor es: ",num1;
		
	SiNo
		Si num2 > num1 y num2 > num3 Entonces
			Escribir "El mayor es: ",num2;
			
		SiNo
			Escribir "El mayor es: ",num3;
			
		FinSi
	FinSi
	
FinProceso

*/

/* JS */

// version 1
// const num1 = Number( prompt('Digite el primer n°: ') );
// const num2 = Number( prompt('Digite el segundo n°: ') );
// const num3 = Number( prompt('Digite el tercer n°: ') );

// let resultado;

// if(num1 > num2 && num1 > num3) {
// 	resultado = `El mayor es ${num1}`;

// } else if( num2 > num1 && num2 > num3) {
// 	resultado = `El mayor es ${num2}`;

// } else {
// 	resultado = `El mayor es ${num3}`;
// }

// const result = () => `El resultado es: ${resultado}.`;

// console.log( result() );

// version 2
function ejercicio5(num1, num2, num3) {

	let resultado;

	if(num1 > num2 && num1 > num3) {
		resultado = `El mayor es ${num1}`;

	} else if( num2 > num1 && num2 > num3) {
		resultado = `El mayor es ${num2}`;

	} else {
		resultado = `El mayor es ${num3}`;
	}

	const result = () => `El resultado es: ${resultado}.`;

	console.log( result() );
}

ejercicio5(4, 25, 9);



/* EXERCISE 6 */

/*
Una fruteria ofrece las manzanas con el descuento según la siguiente tabla:

N° de Kilos comprados | % de descuento

0 - 2		    | 0%

2.01 - 5	  | 10%

5.01 - 10   | 15%

10.01 - ... | 20%

Determinar cuánto pagará una persona que compre manzanas en esa frutería (Diagrama N-S).
*/

/*  
Proceso ejercicio6
	definir precioK, kilos, precioI como reales;
	definir descuento, precio_final como reales;
	
	Escribir "Cuanto cuesta el kilo de manzanas? ";
	Leer precioK;
	
	Escribir "Cuantos kilos de manzana ha comprado?";
	Leer kilos;
	
	precioI <- precioK * kilos;
	
	Si kilos >= 0 y kilos <= 2 Entonces
		descuento <- 0;
		
	SiNo
		Si kilos >= 2.01 y kilos <= 5 Entonces
			descuento <- precioI * 0.1;
			
		SiNo
			Si kilos >= 5.01 y kilos <= 10 Entonces
				descuento <- precioI * 0.15;
				
			SiNo
				descuento <- precioI * 0.2;
				
			FinSi
		FinSi
	FinSi
	
	precio_final <- precioI - descuento;
	
	Escribir "El precio a pagar es: $", precio_final;
FinProceso
*/

/* JS */

const precioK = Number( prompt('¿Cuanto cuesta el kilo de manzanas?') );
const cantidadK = Number( prompt('¿Cuantos kilos de manzanas ha comprado?') );

const precioI = precioK * cantidadK;

let descuento;

if( cantidadK >= 0 && cantidadK <= 2 ) {
	descuento = 0;

} else if( cantidadK >= 2.01 && cantidadK <= 5 ) {
	descuento = precioI * 0.1;

} else if( cantidadK >= 5.01 && cantidadK <= 10 ) {
	descuento = precioI * 0.15;

} else {
	descuento = precioI * 0.2;
}

const precioFinal = precioI - descuento;

const result = () => `El precio a pagar es: $${precioFinal}.`;

console.log( result() );



/* EXERCISE 7 */

/*
Día de la semana según un n°:

Elaborar un programa que me muestre los días de las semanas cuando 
ingrese los siete primeros n° (pseudocódigo).

Lunes        | 1
Martes       | 2
Miércoles    | 3
Jueves       | 4
Viernes      | 5
Sábado       | 6
Domingo      | 7
*/

/*  
Proceso ejercicio7
	definir num como entero;
	
	escribir "Digite un numero del dia de la semana (1-7): ";
	leer num;
	
	segun num hacer
		1: escribir "Lunes";
		2: escribir "Martes";
		3: escribir "Miercoles";
		4: escribir "Jueves";	
		5: escribir "Viernes";
		6: escribir "Sabado";
		7: escribir "Domingo";			
			
		de otro modo:
			escribir "Error, no existe dia para ese numero";
	FinSegun	
FinProceso
*/

/* JS */

const num = parseInt(prompt('Digite un numero del dia de la semana (1-7): '));

switch (num) {
  case 1:
    console.log('Lunes');
    break;

  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miercoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sabado');
    break;
  case 7:
    console.log('Domingo');
    break;
  default:
    console.log('Error, no existe dia para ese numero');
    break;
}



/* EXERCISE 8 */

/* 
Elaborar un programa que me muestre el significado de aniversario 
cada decada hasta los 60.  (Diagrama de Flujo).

Tabla:

Bodas de Hojalata    | 10 años
Bodas de Porcelana   | 20 años
Bodas de Perlas  		 | 30 años
Bodas de Rubí        | 40 años
Bodas de Oro         | 50 años
Bodas de Diamante    | 60 años
*/

/*
Proceso ejercicio8
	definir decada como entero;
	
	Escribir "Digite una decada";
	Leer decada;
	
	Segun decada Hacer
		10:
			Escribir "Bodas de Hojalata";
		20:
			Escribir "Bodas de Porcelana";
		30:
			Escribir "Bodas de Perlas";
		40:
			Escribir "Bodas de Rubí";
		50:
			Escribir "Bodas de Oro";
		60:
			Escribir "Bodas de Diamante";
		De Otro Modo:
			Escribir "Decada no existente";
	FinSegun

FinProceso
*/

/* JS */

const num = parseInt(prompt('Digite una decada (10 - 60): '));

switch (num) {
  case 10:
    console.log('Bodas de Hojalata');
    break;

  case 20:
    console.log('"Bodas de Porcelana');
    break;
  case 30:
    console.log('Bodas de Perlas');
    break;
  case 40:
    console.log('Bodas de Rubí');
    break;
  case 50:
    console.log('Bodas de Oro');
    break;
  case 60:
    console.log('Bodas de Diamante');
    break;

  default:
    console.log('Decada no existente');
    break;
}



/* EXERCISE 9 */

/* 
Hacer un programa que tenga un menú con las siguientes opciones:

Opción 1: Elevar un número a una potencia X
Opción 2: Sacar la raíz cuadrada de un número
Opción 3: Salir 
*/

/*
Proceso ejercicio9
	definir opcion como entero;
	
	Escribir "MENU";	
	Escribir "1. Elevar un numero a una potencia X";
	Escribir "2. Sacar la raiz cuadrada de un numero";
	Escribir "3. Salir";
	
	Escribir "Digite una opcion: ";
	Leer opcion;
	
	Segun opcion Hacer
		1:
			definir num,pot,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			Escribir "Digite la potencia";
			Leer pot;
			resultado <- num^pot;
			Escribir "El resultado es: ",resultado;
			
		2:
			definir num,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			resultado <- rc(num);
			Escribir "El resultado es: ",resultado;
			
		3:
		De Otro Modo:
			Escribir "Se equivoco de opcion de menu";
			
	FinSegun
FinProceso
*/

/* JS */
