// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function indicaPar(numero) {
  if (numero % 2 == 0) {
    console.log("El número seleccionado es par");
  } else {
    console.log("El número seleccionado es impar");
  }
}

indicaPar(2);
indicaPar(3);
indicaPar(12);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function comparaNumero(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo");
  } else if (numero1 < numero2) {
    console.log("El segundo número es mayor qu el primero");
  } else {
    console.log("Los números son iguales");
  }
}

comparaNumero(12, 5);
comparaNumero(3, 25);
comparaNumero(25, 25);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplo(numero) {
  if (numero % 5 === 0) {
    console.log("El número es múltiplo de 5");
  } else {
    console.log("El número no es múltiplo de 5");
  }
}

esMultiplo(15);
esMultiplo(4);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimeNumeros(numero) {
  for (var i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimeNumeros(8);
imprimeNumeros(3);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimePalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

imprimePalabra("Probando", 5);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimeArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

array = ["Esto", "es", "una", "prueba"];

imprimeArray(array);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimeMenosQuinto(nuevoArray) {
  for (let i = 0; i < nuevoArray.length; i++) {
    if (i !== 4) {
      console.log(nuevoArray[i]);
    }
  }
}

nuevoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

imprimeMenosQuinto(nuevoArray);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicaNumeros(otroArray, numero) {
  for (let i = 0; i < otroArray.length; i++) {
    console.log(otroArray[i] * numero);
  }
}

otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

multiplicaNumeros(otroArray, 3);
