import Shape from "./Shape";
import Vector from "../Math/Vector";

class Text extends Shape
{
    private text: string;

    constructor(position: Vector, text: string, strokeStyle: string = 'transparent', fillStyle: string = 'transparent')
    {
        super(position, strokeStyle, fillStyle);
        this.text = text;
    }

    draw(): void
    {
        super.draw();
        this.paper.text(this.position, this.text);
    }
}

export default Text;
