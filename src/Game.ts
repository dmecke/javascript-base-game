import context from "./System/Context";
import canvas from "./System/Canvas";
import Player from "./Entity/Player";
import Vector from "./Math/Vector";

class Game
{
    static FPS:number = 30;

    private player: Player;

    constructor()
    {
        this.player = new Player(new Vector(100, 100));
    }

    run()
    {
        setInterval(this.update.bind(this), 1 / Game.FPS);
        setInterval(this.render.bind(this), 1 / Game.FPS);
    }

    update(): void
    {
        this.player.update();
    }

    render(): void
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.player.render();
    }
}

export default Game;
