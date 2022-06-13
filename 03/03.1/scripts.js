// EXERCISE 01

//Cree un programa por el cual se le solicite al usuario el radio de un círculo.
//El programa deberá calcular y mostrar el área.

// 1V

// const radio = Number(prompt('ingrese el radio: '));

// const circleArea = () => {
//   const operation = Math.PI * Math.pow(radio, 2);

//   const result = `El area del círculo es ${operation.toFixed(2)}`;

//   return result;
// };

// console.log(circleArea());

// 2V

// referenciar button
const btn = document.querySelector('#btn').addEventListener('click', () => {
  exercise1();
});

const exercise1 = () => {
  // Get elements from the dom
  let radio = document.querySelector('#num').value;

  radio = Number(radio);

  const outputData = document.querySelector('#output');

  const operation = Math.PI * Math.pow(radio, 2);

  const result = `El area del círculo es ${operation.toFixed(2)}`;

  const outputTextError = `Los datos ingresados no son correctos`;

  // Validation
  if (isNaN(radio) || radio === 0) {
    outputData.innerHTML = outputTextError;
  } else {
    outputData.innerHTML = result;
  }

  console.log(radio);
};
