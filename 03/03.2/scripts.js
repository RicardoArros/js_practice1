// EXERCISE 02

//Crear un programa que solicite dos números y muestre los resultados de
//todas sus operaciones aritméticas

// 1V

// const arithmetic = () => {
//   const num1 = Number(prompt('Ingrese el primer valor: '));
//   const num2 = Number(prompt('Ingrese el segundo valor: '));

//   const adding = num1 + num2;
//   const subtract = num1 - num2;
//   const multiply = num1 * num2;
//   const divide = num1 / num2;

//   const result = `suma: ${adding}\nresta: ${subtract}\nmultiplicacion: ${multiply}\ndivision: ${divide}`;

//   return result;
// };

// console.log(arithmetic());

// 2V

// let number1 = parseInt(prompt('Ingrese un numero'));
// let number2 = parseInt(prompt('Ingrese otro numero'));

// function arithmeticOperation(param1, param2) {
//   let operations = [
//     `${param1} + ${param2} = ${param1 + param2}`,
//     `${param1} - ${param2} = ${param1 - param2}`,
//     `${param1} * ${param2} = ${param1 * param2}`,
//     `${param1} / ${param2} = ${param1 / param2}`,
//     `${param1}** ${param2} = ${Math.pow(param1, param2)}`,
//     `${param1} % ${param2} = ${param1 % param2}`,
//   ];

//   return operations.join('<br/>');
// }

// document.write(arithmeticOperation(number1, number2));

// 3V

// referenciar button
const btn = document.querySelector('#btn').addEventListener('click', () => {
  exercise2();
});

const exercise2 = () => {
  // Get elements from the dom
  let num1 = Number(document.querySelector('#num1').value);
  let num2 = Number(document.querySelector('#num2').value);

  let operations = [
    `${num1} + ${num2} = ${num1 + num2}`,
    `${num1} - ${num2} = ${num1 - num2}`,
    `${num1} * ${num2} = ${num1 * num2}`,
    `${num1} / ${num2} = ${num1 / num2}`,
    `${num1}** ${num2} = ${Math.pow(num1, num2)}`,
    `${num1} % ${num2} = ${num1 % num2}`,
  ];

  const outputData = document.querySelector('#output');

  const outputTextError = `Los datos ingresados no son correctos`;

  const result = operations.join('<br/>');

  console.log(typeof num1, typeof num2);

  // Validation;
  if (isNaN(num1) || num1 === 0) {
    outputData.innerHTML = outputTextError;
  } else {
    outputData.insertAdjacentHTML('afterbegin', result);
  }
};
