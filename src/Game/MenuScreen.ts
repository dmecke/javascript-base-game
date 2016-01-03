import GameScreen from "./GameScreen";
import Player from "../Entity/Player";
import Vector from "../Math/Vector";
import Text from "../Graphics/Text";
import Mouse from "../Input/Mouse";
import LevelScreen from "./LevelScreen";

class MenuScreen extends GameScreen
{
    public update(): void
    {
        if (Mouse.clicked()) {
            this.deactivate();

            var level = new LevelScreen(this.game);
            level.player = new Player(new Vector(100, 100));
            level.activate();
        }
    }

    public render(): void
    {
        new Text('Javascript Base Game')
            .at(this.game.dimensions.divide(2))
            .withFillStyle('blue')
            .draw();
    }
}

export default MenuScreen;
