/* JS - EJERCICIOS DOM */

// EJERCICIO 03

/* 
Realice un diagrama de flujo que permita conocer si un numero es divisible
por otro. El usuario ingresará los dos números y como salida se mostrará el
mensaje "El número {numero1} es divisible por {numero2}" o el mensaje “El
número {numero1} no es divisible por {numero2}” según corresponda.
*/

//
const btn = document.querySelector('#btn').addEventListener('click', () => {
  example2();
});

//
const example2 = () => {
  // Get elements from the dom
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  const outputData = document.querySelector('#output');

  //
  let outputText;

  //
  if (Number(num1) % Number(num2) === 0) {
    outputText = `El numero ${num1} es divisible por ${num2}`;
    outputData.innerHTML = outputText;
  } else {
    outputText = `El numero ${num1} NO es divisible por ${num2}`;
    outputData.innerHTML = outputText;
  }

  //
  if (isNaN(num1) || isNaN(num2)) {
    outputText = `Los datos ingresados no son correctos`;
    outputData.innerHTML = outputText;
  }
};
