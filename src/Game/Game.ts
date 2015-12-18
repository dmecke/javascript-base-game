import context from "./../System/Context";
import canvas from "./../System/Canvas";
import Player from "./../Entity/Player";
import Vector from "./../Math/Vector";
import GameLoop from "./GameLoop";
import GameScreen from "./GameScreen";

class Game implements GameLoop
{
    static FPS:number = 30;

    public screens: Array<GameScreen> = [];
    public dimensions: Vector;

    constructor(dimensions: Vector)
    {
        this.dimensions = dimensions;
    }

    public run()
    {
        setInterval(this.update.bind(this), 1 / Game.FPS);
        setInterval(this.render.bind(this), 1 / Game.FPS);
    }

    public update(): void
    {
        this.screens.forEach(function(screen: GameScreen) {
            if (screen.isActive) {
                screen.update();
            }
        });
    }

    public render(): void
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.screens.forEach(function(screen: GameScreen) {
            if (screen.isActive) {
                screen.render();
            }
        });
    }
}

export default Game;
