# Array management

## createArray

Tenemos la función `createArray` que nos permite crear un objeto de Tipo array concatenando los valores iniciales que le pasamos a la función.

Con el fin de sacar el máximo provecho de la ayuda de los editores, aplicar generic o casting para que nos permita indicarle que a la hora de crear un array, vamos a crear de tipo number, string o ambos.

Tenemos la libertad de eliminar el código que consideremos inválidos.

## displayTupeType

Aplicar generic o casting para tipar los parámetros de la función `displayTupeType`. El parámetro es una tupla que pueden tener cualquier tipo gracias a los generics o casting.

Nota: eliminar código innecesario de validación.

## class Manager

Tenemos una clase Manager que nos permite almacenar items dentro de un array. Debemos aplicar generic o casting para que dicha clase nos permita almacenar un tipo en concreto de datos.

También, debemos solucionar el error que nos lanza TS al intentar hackear la clase metiéndole un string en la línea 76. `Hacked Manager should contains a one string`
