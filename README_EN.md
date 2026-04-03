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