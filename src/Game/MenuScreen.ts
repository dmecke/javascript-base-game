import GameScreen from "./GameScreen";
import Player from "../Entity/Player";
import Vector from "../Math/Vector";
import Text from "../Graphics/Text";

class LevelScreen extends GameScreen
{
    public update(): void
    {
    }

    public render(): void
    {
        new Text(this.game.dimensions.divide(2), "Javascript Base Game", 'blue').draw();
    }
}

export default LevelScreen;
