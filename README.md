[Español](https://github.com/Rudedev1/Better-BroCode-Snake-game-js/blob/main/README.md#juego-snake-js)
[English](https://github.com/Rudedev1/Better-BroCode-Snake-game-js/blob/main/README.md#snake-game-js)

# Juego-Snake-js
 Juego de Snake hecho en javascript siguiendo el tutorial https://www.youtube.com/watch?v=Je0B3nHhKmM y añadiendo algunas funcionalidades más y bugfixing.

## Funcionalidades extra

 - Comida especial: Cada vez que se inicia el juego o se come una pieza normal, hay una probabilidad del 10% de que aparezca en el tablero una fruta especial que suma 5 puntos al score, sin aumentar el tamaño de la serpiente.
 - Reset con el spaceBar: puedes resetear el juego sin pulsar manualmente el botón reset, con la barra espaciadora del teclado.

## Bugfixes

- Migración de `event.keyCode` a `event.key`:
  Se ha reemplazado el uso de keycodes numéricos (deprecated) por strings como `"ArrowUp"` o `" "` para mejorar la legibilidad y compatibilidad.

- Corrección del uso de `event` global (deprecated):
  Se ha eliminado el uso implícito de `window.event`, asegurando que el objeto `event` se recibe correctamente como parámetro en los event listeners.

- Fix de movimiento diagonal al inicio:
  Se ha corregido la velocidad inicial estableciendo `yVelocity = 0`, evitando que la serpiente se mueva en diagonal al comenzar el juego.

- Fix de múltiples loops al reiniciar (speed bug):
  Se ha evitado la creación de múltiples bucles de juego simultáneos añadiendo una comprobación:
  ```js
  if (running) return;
  ```
- Añadido bordes a la comida con `const foodBorder = "black";` y `ctx.strokeStyle = foodBorder;`

-----

# Snake-game-js
Snake game made in JavaScript following the tutorial https://www.youtube.com/watch?v=Je0B3nHhKmM and adding some more functionalities and bugfixing.

## Extra functionalities

 - Special food: Each time the game starts or a normal piece is eaten, there is a 10% chance that a special fruit will appear on the board that adds 5 points to the score, without increasing the size of the snake.
 - Reset with the spaceBar: you can reset the game without manually pressing the reset button, using the keyboard space bar.

## Bugfixes

- Migration from `event.keyCode` to `event.key`:
  The use of numeric keycodes (deprecated) has been replaced by strings like `"ArrowUp"` or `" "` to improve readability and compatibility.

- Correction of the use of global `event` (deprecated):
  The implicit use of `window.event` has been removed, ensuring that the `event` object is correctly received as a parameter in the event listeners.

- Fix for diagonal movement at the start:
  The initial speed has been corrected by setting `yVelocity = 0`, preventing the snake from moving diagonally when starting the game.

- Fix for multiple loops on restart (speed bug):
  The creation of multiple simultaneous game loops has been prevented by adding a check:
  ```js
  if (running) return;
  ```
- Added borders to the food with `const foodBorder = "black";` and `ctx.strokeStyle = foodBorder;`

// Transalted by https://openl.io/es/translate/markdown