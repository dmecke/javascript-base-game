import Context from "./../System/Context";
import Shape from "./Shape";
import Vector from "../Math/Vector";

class Circle extends Shape
{
    private radius: number = 10;

    public withRadius(radius:number):this
    {
        this.radius = radius;

        return this;
    }

    draw():void
    {
        Context.fillStyle = this.fillStyle.toString();
        Context.strokeStyle = this.strokeStyle.toString();
        Context.lineWidth = this.lineWidth;
        Context.beginPath();
        Context.arc(this.position.x(), this.position.y(), this.radius, 0, 2 * Math.PI);
        Context.stroke();
        Context.fill();
        Context.closePath();
    }
}

export default Circle;
