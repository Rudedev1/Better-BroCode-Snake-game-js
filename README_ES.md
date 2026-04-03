# Snake-game-js
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