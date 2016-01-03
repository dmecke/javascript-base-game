require('./app.css');

import Game from './Game/Game';
import LevelScreen from './Game/LevelScreen';
import MenuScreen from './Game/MenuScreen';
import Player from './Entity/Player';
import Vector from './Math/Vector';
import canvas from './System/Canvas';

var game = new Game(new Vector(canvas.width, canvas.height));

new MenuScreen(game).activate();

game.run();
