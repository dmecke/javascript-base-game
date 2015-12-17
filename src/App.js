require('./app.css');

import Game from './Game';
import mouse from './Input/Mouse';
import keyboard from './Input/Keyboard';

var game = new Game();

game.run();

document.addEventListener('mousemove', function() { mouse.updatePosition(event); });
document.addEventListener('mousedown', function() { mouse.buttonDown(event); });
document.addEventListener('mouseup', function() { mouse.buttonUp(event); });
document.addEventListener('keydown', function() { keyboard.addKey(event.keyCode); });
document.addEventListener('keyup', function() { keyboard.removeKey(event.keyCode); });
