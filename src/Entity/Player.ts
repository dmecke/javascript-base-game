import Vector from  "./../Math/Vector";
import Circle from "./../Graphics/Circle";
import Rectangle from "./../Graphics/Rectangle";
import Square from "./../Graphics/Square";
import Input from "../Input/Input";
import GameLoop from "../Game/GameLoop";

class Player implements GameLoop
{
    private input: Input;
    private position: Vector;

    constructor(position: Vector)
    {
        this.input = Input.create();
        this.position = position;

        this.input.mouse.onMove(this.onMouseMove.bind(this));
    }

    public update(): void
    {
    }

    public render(): void
    {
        new Circle(this.position, 10, 'red').draw();
        new Rectangle(this.position, 40, 20, 'blue').draw();
        new Square(this.position, 30, 'green').draw();
        new Square(this.position, 50, 'green').draw();
    }

    private onMouseMove(): void
    {
        this.position = this.input.mouse.position;
    }
}

export default Player;
