import GameScreen from "./GameScreen";
import Player from "../Entity/Player";

class LevelScreen extends GameScreen
{
    public player: Player;

    public update(): void
    {
        this.player.update();
    }

    public render(): void
    {
        this.player.render();
    }
}

export default LevelScreen;
