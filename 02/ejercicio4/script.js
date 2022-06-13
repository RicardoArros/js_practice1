/* JS - EJERCICIOS DOM */

// EJERCICIO 04

/* 
Realice un diagrama que solicite el ingreso de dos números. 
Como salida debe mostrar un mensaje con el número mayor.
*/

//
const btn = document.querySelector('#btn').addEventListener('click', () => {
  exercise1();
});

const exercise1 = () => {
  // Get elements from the dom
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;
  const outputData = document.querySelector('#output');

  //
  num1 = Number(num1);
  num2 = Number(num2);

  //
  if (num1 > num2) {
    const outputText = `El numero mayor es ${num1}`;
    outputData.innerHTML = outputText;
  } else if (num2 > num1) {
    const outputText = `El numero mayor es ${num2}`;
    outputData.innerHTML = outputText;
  } else {
    const outputText = `los numeros ${num1} y ${num2} son iguales`;
    outputData.innerHTML = outputText;
  }

  //
  if (isNaN(num1) || isNaN(num2)) {
    outputText = `Los datos ingresados no son correctos`;
    outputData.innerHTML = outputText;
  }
};
