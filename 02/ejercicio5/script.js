/* JS - EJERCICIOS DOM */

// EJERCICIO 05

/* 
Realice un diagrama de flujo que permita calcular la hipotenusa 
de un triangulo dado sus dos catetos. Considere utiliza una 
función sqrt para calcular la raíz cuadrada.
𝐻𝑖𝑝𝑜𝑡𝑒𝑛𝑢𝑠𝑎 = √ 𝑎2 + 𝑏2
*/

//
const btn = document.querySelector('#btn').addEventListener('click', () => {
  exercise2();
});

const exercise2 = () => {
  // Get elements from the dom
  let cateto1 = document.querySelector('#num1').value;
  let cateto2 = document.querySelector('#num2').value;
  const outputData = document.querySelector('#output');

  //
  cateto1 = Number(cateto1);
  cateto2 = Number(cateto2);

  //
  let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
  hipotenusa = hipotenusa.toFixed(3);

  //
  let outputText;

  //
  if (isNaN(cateto1) || isNaN(cateto2) || cateto1 === 0 || cateto2 === 0) {
    outputText = `Los datos ingresados no son correctos`;
    outputData.innerHTML = outputText;
  } else {
    outputText = `El resultado es ${hipotenusa}`;
    outputData.innerHTML = outputText;
  }

  //
};
