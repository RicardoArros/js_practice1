/* ESTRUCTURAS SECUENCIALES */


/* EXERCISE 1 */

/* 
Calcular la cantidad de segundos que están incluidos en el número 
de horas, minutos y segundos ingresados por el usuario. 
*/

/* 
Proceso ejercicio1
	definir seg, min, horas como enteros;
	definir min_seg, horas_seg como enteros;
	definir seg_totales como entero;
	
	escribir "Ingrese la cantidad de segundos: ";
	leer seg;
	
	escribir "Ingrese la cantidad de minutos: ";
	leer min;
	
	escribir "Ingrese la cantidad de horas: ";
	leer horas;
	
	horas_seg <- horas * 3600;	
	min_seg <- min * 60;
	
	seg_totales <- (horas_seg + min_seg + seg);
	
	escribir "La cantidad de segundos totales son ",seg_totales;	
FinProceso 
*/

/* JS */

const seg = Number( prompt('Ingrese la cantidad de segundos: ') );
const min = Number( prompt('Ingrese la cantidad de minutos: ') );
const hours = Number( prompt('Ingrese la cantidad de horas: ') );

const minSeg = min * 60;
const hourSeg = hours * 3600;

const segTotal = seg + minSeg + hourSeg;

console.log(`La cantidad de segundos totales son: ${segTotal}`);



/* EXERCISE 2 */

/* 
Hacer un programa para ingresar el radio de un círculo y se reporte su 
área y la longitud de la circunferencia.
*/

/* 
Proceso ejercicio2
	Definir radio, area, long como Real;
	
	Escribir 'Digite el valor del radio: ';
	Leer radio;
	
	area <- PI * radio^2;
	long <- 2 * PI * radio;
	
	Escribir 'El area de la circunferencia es: ',area;
	
	Escribir 'la longitud es: ',long;
FinProceso 
*/

/* JS */

const radio = Number( prompt('Digite el valor del radio: ') );

const area = Math.PI * Math.pow(radio, 2);

const long = 2 * Math.PI * radio;

const result = () => `El area de la circunferencia es: ${area}, y la longitud es ${long}.`;

console.log( result() );



/* EXERCISE 3 */

/* 
Un maestro desea saber qué porcentaje de hombres y que porcentaje de mujeres 
hay en un grupo de estudiantes.
*/

/* 
Proceso ejercicio3
	definir num_men,num_women como entero;
	definir total_students como entero;
	definir porcentajeM, porcentajeW como reales;
	
	Escribir 'Digite la cantidad de estudiantes hombres: ';
	Leer num_men;
	
	Escribir 'Digite la cantidad de estudiantes mujeres: ';
	Leer num_women;
	
	total_students <- num_men + num_women;
	porcentajeM <- num_men / total_students * 100;
	porcentajeW <- num_women / total_students * 100;
	
	Escribir "El porcentaje de hombres es: ", redon(porcentajeM),"%";
	Escribir "El porcentaje de mujeres es: ", redon(porcentajeW),"%";
FinProceso
*/

/* JS */

const numMen = Number( prompt('Digite la cantidad de estudiantes hombres: ') );
const numWomen = Number( prompt('Digite la cantidad de estudiantes mujeres: ') );

const totalStudents = (numMen + numWomen);

const percentageMen = Math.round( parseFloat( numMen / totalStudents * 100) );
const percentageWomen = Math.round( parseFloat( numWomen / totalStudents * 100) );

const result = () => `El porcentaje de hombres es: ${percentageMen}%
	\nEl porcentaje de mujeres es: ${percentageWomen}%`
;

console.log( result() );



/* EXERCISE 4 */

/* 
Un profesor prepara 3 cuestionarios para una evaluación final: A, B y C. Se sabe que se tarda
5 minutos en revisar el cuestionario A, 8 en revisar el cuestionario B y 6 minutos en el C. 
La cantidad de exámenes de cada tipo se entran por teclado. ¿Cuántas horas y cuantos minutos 
se tardará en revisar todas las evaluaciones?
*/

/* 
Proceso ejercicio4
	definir cantidadA, cantidadB, cantidadC como enteros;
	definir tiempoA, tiempoB, tiempoC como enteros;
	definir tiempo_total como entero;
	definir horas, minutos como enteros;
	
	escribir "Digite la cantidad de cuestionarios A: ";
	leer cantidadA;
	
	escribir "Digite la cantidad de cuestionarios B: ";
	leer cantidadB;
	
	escribir "Digite la cantidad de cuestionarios C: ";
	leer cantidadC;
		
	// calcular los minutos que se tardará por cada cuestionario
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	// calculamos el tiempo total que le toma revisar todos los cuestionarios
	tiempo_total <- tiempoA + tiempoB + tiempoC;	
	
	// calculamos las horas y minutos
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	escribir "se tardara ",horas, " horas y ",minutos, " minutos";
FinProceso
*/

/* JS */

const cantidadA = Number( prompt('Digite la cantidad de cuestionarios A: ') );
const cantidadB = Number( prompt('Digite la cantidad de cuestionarios B: ') );
const cantidadC = Number( prompt('Digite la cantidad de cuestionarios C: ') );

// calcular los minutos que se tardará por cada cuestionario
const tiempoA = cantidadA * 5;
const tiempoB = cantidadB * 8;
const tiempoC = cantidadC * 6;

// calculamos el tiempo total que le toma revisar todos los cuestionarios
const tiempo_total = tiempoA + tiempoB + tiempoC;

// calculamos las horas y minutos
const horas = Math.trunc(tiempo_total / 60);
const minutos = tiempo_total % 60;

const resultado = () => `Se tardará ${horas} horas y ${minutos} minutos en revisar`;

console.log( resultado() );



/* EXERCISE 5 */

/* 
Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber 
cuánto deberá pagar finalmente por su compra.
*/

/* 
Proceso ejercicio5
	definir precio, descuento, precio_final como real;
	
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	
	descuento <- precio * 0.15;
	precio_final <- precio - descuento;
	
	Escribir "El precio a pagar es de: ",precio_final;
FinProceso
*/

/* JS */

const precio = Number( prompt('Digite el precio a pagar: ') );

const descuento = precio * 0.15;

const precioFinal = Math.trunc(precio - descuento);

const resultado = () => `El precio a pagar es de: ${precioFinal}`;

console.log( resultado() );


/* EXERCISE 6 */

/* 
Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. 
Dicha calificación se compone de los siguientes porcentajes:

- 55% del promedio de sus 3 calificaciones parciales.
- 30% de la calificación del examen final.
- 15% de la calificación de un trabajo final.
*/

/* 
Proceso ejercicio6
	definir parcial1, parcial2, parcial3, promedioP, notasParcial como reales;
	definir examen_final, notaExamen como real;
	definir notaTrabajo, notaFinalTrabajo como reales;
	definir notaFinal como real;
	
	Escribir "Digite las 3 notas de los parciales: ";
	Leer parcial1, parcial2, parcial3;
	
	promedioP <- (parcial1 + parcial2 + parcial3) / 3;	
	notasParcial <- promedioP * 0.55;
	
	Escribir "Digite la nota del examen final: ";
	Leer examen_final;
	
	notaExamen <- examen_final * 0.3;
	
	Escribir "Digite la nota del trabajo final: ";
	Leer notaTrabajo;
	
	notaFinalTrabajo <- notaTrabajo * 0.15;

	notaFinal <- notasParcial + notaExamen + notaFinalTrabajo;
	
	Escribir "La calificacion final es: ", notaFinal;
FinProceso
*/

/* JS */

const parcial1 = parseFloat( prompt('Digite la primera nota de los parciales: ') );
const parcial2 = parseFloat( prompt('Digite la segunda nota de los parciales: ') );
const parcial3 = parseFloat( prompt('Digite la tercera nota de los parciales: ') );

const promedioP = (parcial1 + parcial2 + parcial3) / 3;
const notasParcial = promedioP * 0.55;

const examenFinal = parseFloat( prompt('Digite la nota del examen final: ') );
const notaExamen = examenFinal * 0.3;

const notaTrabajo = parseFloat( prompt('Digite la nota del trabajo final: ') );
const notaFinalTrabajo = notaTrabajo * 0.15;

const notaFinal = notasParcial + notaExamen + notaFinalTrabajo;

const resultado = () => `La calificación final es: ${notaFinal}`;

document.querySelector('.container').innerHTML = resultado();
