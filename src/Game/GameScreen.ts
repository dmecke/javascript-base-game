import Game from "./Game";
import GameLoop from "./GameLoop";

abstract class GameScreen implements GameLoop
{
    protected game: Game;
    public isActive: boolean = false;

    constructor(game: Game)
    {
        this.game = game;
        this.game.screens.push(this);
    }

    abstract update(): void;

    abstract render(): void;

    public activate(): void
    {
        this.isActive = true;
    }
}

export default GameScreen;
