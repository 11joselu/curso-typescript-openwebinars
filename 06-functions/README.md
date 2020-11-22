# Calculator

Tenemos una aplicación donde el usuario hará click en un botón y de manera aleatoria el dinero que tenía de manera inicial (1000€) aumentará o multiplicará o restará o se dividirá (actions). Esas acciones se generarán de manera aleatoria, y si el usuario llega al millón, ganará el juego, si se queda en 0 perderá.

## Requerimientos

1. Definir `PlayTheGameParams`. Los parámetros que recibe la función `playTheGame`

   > actions: las acciones a realizar.

   > totalClick: número de clicks que ha realizado

   > onError: una función cuyo parámetros el random indice generado (para leer la posición de una action) y el listado de acciones y no devuelve nada

   > onSuccess: una función OPCIONAL que recibe como parámetro el número total de clicks

   > userMoney: el dinero total del usuario

2. Tipar todas las funciones y variables que la requieran.
