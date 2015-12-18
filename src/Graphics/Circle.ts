import Shape from "./Shape";
import Vector from "../Math/Vector";

class Circle extends Shape
{
    private radius: number;

    constructor(position: Vector, radius: number, strokeStyle: string = 'transparent', fillStyle: string = 'transparent')
    {
        super(position, strokeStyle, fillStyle);
        this.radius = radius;
    }

    draw(): void
    {
        super.draw();
        this.paper.beginPath();
        this.paper.arc(this.position, this.radius, 0, 2 * Math.PI);
        this.paper.stroke();
        this.paper.fill();
        this.paper.closePath();
    }
}

export default Circle;
