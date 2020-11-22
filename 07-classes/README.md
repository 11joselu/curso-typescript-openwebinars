# BagPack

BagPack es un juego que consiste en tener un jugador, una mochila y una serie de bolsas e ir recogiendo items y almacenarlas en la mochila o en la bolsa.

## Características

1. Si el usuario recoge un Item, debe almacenarlo en la mochila primero.
2. Si la mochila ya está llena, debe almacenarlo en un bolsa.
3. Si la primera bolsa ya está lleno, debemos intentar guardarlo en la siguiente bolsa.
4. Si ya no tiene capacidad en ninguna de las bolsas o en la mochila, el juego termina.

## Requerimientos

1. Implementar una interface para el Container, BagPack y Bag que nos oblique a implementar los métodos `add` y `getCapacity`
2. La clase Player en el constructor recibe `bag`, `bags`. Añadir el tipado correcto para que ésta acepte unos valores que cumplan con el contrado definido anteriormente.
3. Tipar funciones variables si la requieren.
