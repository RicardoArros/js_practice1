/* JS - EJERCICIOS DOM */

// EJERCICIO 01

/* 
Cree un algoritmo que solicite dos números y muestre como
resultado la suma de ellos.
*/

// 1V

// const calculateSum = () => {
//   //
//   const num1 = Number(prompt('Ingrese un número: '));
//   const num2 = Number(prompt('Ingrese otro número: '));

//   //
//   const result = num1 + num2;

//   //
//   const outputText = `El resultado de la suma es ${result}`;
//   const outputTextError = `Los datos ingresados no son correctos`;

//   //
//   if (!isNaN(result)) {
//     console.log(outputText);
//   } else {
//     console.log(outputTextError);
//   }
// };

// calculateSum();

// 2V

const btn = document.querySelector('#btn').addEventListener('click', () => {
  example0();
});

const example0 = () => {
  // Get elements from the dom
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  const outputData = document.querySelector('#output');

  //
  const result = Number(num1) + Number(num2);

  //
  const outputText = `El resultado de la suma es ${result}`;
  const outputTextError = `Los datos ingresados no son correctos`;

  //
  if (!isNaN(result)) {
    outputData.innerHTML = outputText;
  } else {
    outputData.innerHTML = outputTextError;
  }
};
