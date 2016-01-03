import Context from "./../System/Context";
import Vector from "../Math/Vector";
import Shape from "./Shape";

class Square extends Shape
{
    private size:number = 10;

    public withSize(size:number):this
    {
        this.size = size;

        return this;
    }

    public draw():void
    {
        var position = this.position.subtract(new Vector(this.size / 2, this.size / 2));

        Context.fillStyle = this.fillStyle;
        Context.strokeStyle = this.strokeStyle;
        Context.lineWidth = this.lineWidth;
        Context.beginPath();
        Context.rect(position.x(), position.y(), this.size, this.size);
        Context.stroke();
        Context.fill();
        Context.closePath();
    }
}

export default Square;
