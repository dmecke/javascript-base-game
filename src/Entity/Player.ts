import Vector from  "./../Math/Vector";
import Circle from "./../Graphics/Circle";
import Rectangle from "./../Graphics/Rectangle";
import Square from "./../Graphics/Square";
import GameLoop from "../Game/GameLoop";

class Player implements GameLoop
{
    private position:Vector;

    constructor(position:Vector)
    {
        this.position = position;
    }

    public update():void
    {
    }

    public render():void
    {
        new Circle()
            .at(this.position.add(new Vector(0, -20)))
            .withRadius(10)
            .withFillStyle('red')
            .draw();
        new Rectangle()
            .at(this.position)
            .withWidth(50)
            .withHeight(20)
            .withFillStyle('blue')
            .draw();
        new Square()
            .at(this.position.add(new Vector(0, 25)))
            .withSize(30)
            .withFillStyle('green')
            .draw();
    }
}

export default Player;
