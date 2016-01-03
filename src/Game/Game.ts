import context from "./../System/Context";
import canvas from "./../System/Canvas";
import Vector from "./../Math/Vector";
import GameLoop from "./GameLoop";
import GameScreen from "./GameScreen";
import Keyboard from "../Input/Keyboard";
import Mouse from "../Input/Mouse";

class Game implements GameLoop
{
    static FPS:number = 30;

    public screens:Array<GameScreen> = [];
    public dimensions:Vector;

    constructor(dimensions:Vector)
    {
        this.dimensions = dimensions;
        Mouse.init();
        Keyboard.init();
    }

    public run():void
    {
        setInterval(this.update.bind(this), 1 / Game.FPS);
        setInterval(this.render.bind(this), 1 / Game.FPS);
    }

    public update():void
    {
        this.screens.forEach(function(screen:GameScreen) {
            if (screen.isActive) {
                screen.update();
            }
        });
    }

    public render():void
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.screens.forEach(function(screen:GameScreen) {
            if (screen.isActive) {
                screen.render();
            }
        });
    }
}

export default Game;
