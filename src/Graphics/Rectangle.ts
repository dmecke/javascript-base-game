import Shape from "./Shape";
import Vector from "../Math/Vector";

class Rectangle extends Shape
{
    private width: number;
    private height: number;

    constructor(position: Vector, width: number, height: number, strokeStyle: string = 'transparent', fillStyle: string = 'transparent')
    {
        super(position, strokeStyle, fillStyle);
        this.width = width;
        this.height = height;
    }

    draw(): void
    {
        var position = this.position.subtract(new Vector(this.width / 2, this.height / 2));

        super.draw();
        this.paper.beginPath();
        this.paper.rect(position, this.width, this.height);
        this.paper.stroke();
        this.paper.fill();
        this.paper.closePath();
    }
}

export default Rectangle;
