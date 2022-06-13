/* JS - EJERCICIOS DOM */

// EJERCICIO 06

/* 
Realice un diagrama de flujo que solicite dos números y una 
operación (+, -, *, /). El algoritmo debe entregar el 
resultado dada la operación seleccionada.
*/

//
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;

//
num1 = Number(num1);
num2 = Number(num2);

//
const select = document.querySelector('#select');

// select.addEventListener('change', (e) => {});

//
const outputData = document.querySelector('#output');

//
const btn = document.querySelector('#btn').addEventListener('click', () => {
  //
  //
  select.addEventListener('change', (e) => {
    //
    let operationMenu;

    //
    switch (e.target.value) {
      case 'adding':
        //
        console.log('adding');

        //
        operationMenu = num1 + num2;
        outputData.innerText = operationMenu;

        break;
      case 'subtracting':
        //
        console.log('subtracting');

        //
        operationMenu = num1 - num2;
        outputData.innerText = operationMenu;
        break;
      case 'multiplying':
        //
        console.log('multiplying');

        //
        operationMenu = num1 * num2;
        outputData.innerText = operationMenu;

        break;
      case 'dividing':
        //
        console.log('dividing');

        //
        operationMenu = num1 / num2;
        outputData.innerText = operationMenu;

        break;

      default:
        //
        if (isNaN(num1) || isNaN(num2)) {
          outputText = `Los datos ingresados no son correctos`;
          outputData.innerText = outputText;
        }
    }
  });
});

//

// const selectMenu = () => {

// };
