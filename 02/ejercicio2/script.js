/* JS - EJERCICIOS DOM */

// EJERCICIO 02

/* 
Realice un diagrama de flujo que permita obtener el valor absoluto de un
número. El usuario ingresará un número y el algoritmo entregará el mensaje
“El valor absoluto es..."
*/

//
const btn = document.querySelector('#btn').addEventListener('click', () => {
  example1();
});

const example1 = () => {
  // Get elements from the dom
  let num1 = document.querySelector('#num1').value;

  const outputData = document.querySelector('#output');

  const outputTextError = `Los datos ingresados no son correctos`;

  //
  num1 = Number(num1);

  let result;

  if (num1 > 0 && !isNaN(num1)) {
    result = num1 * 1;

    outputData.innerHTML = `El valor absoluto del numero es ${result}`;

  } else if (num1 < 0 && !isNaN(num1)) {
    result = num1 * -1;

    outputData.innerHTML = `El valor absoluto del numero es ${result}`;

  } else {
    outputData.innerHTML = outputTextError;
    
  }
};
