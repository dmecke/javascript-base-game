import context from "../System/Context";
import Vector from "../Math/Vector";
import Paper from "./Paper";

abstract class Shape
{
    protected paper: Paper;
    protected position: Vector;
    protected strokeStyle: string;
    protected fillStyle: string;

    constructor(position: Vector, strokeStyle:string = 'transparent', fillStyle:string = 'transparent')
    {
        this.paper = new Paper(context);
        this.position = position;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;
    }

    draw()
    {
        this.paper.strokeStyle(this.strokeStyle);
        this.paper.fillStyle(this.fillStyle);
    }
}

export default Shape;
