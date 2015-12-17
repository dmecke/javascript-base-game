import Rectangle from "./Rectangle";
import Vector from "../Math/Vector";

class Square extends Rectangle
{
    constructor(position: Vector, size: number, strokeStyle: string = 'transparent', fillStyle: string = 'transparent')
    {
        super(position, size, size, strokeStyle, fillStyle);
    }
}

export default Square;
