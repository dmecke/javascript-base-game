class Vector
{
    private components: Array<number> = [];

    constructor(x: number, y: number)
    {
        this.components[0] = x;
        this.components[1] = y;
    }

    x(): number
    {
        return this.components[0];
    }

    y(): number
    {
        return this.components[1];
    }

    add(vector: Vector): Vector
    {
        return new Vector(this.x() + vector.x(), this.y() + vector.y());
    }

    subtract(vector: Vector): Vector
    {
        return new Vector(this.x() - vector.x(), this.y() - vector.y());
    }

    multiply(multiplier: number): Vector
    {
        return new Vector(this.x() * multiplier, this.y() * multiplier);
    }

    divide(divisor: number): Vector
    {
        return new Vector(this.x() / divisor, this.y() / divisor);
    }

    length(): number
    {
        return Math.sqrt(this.x() * this.x() + this.y() * this.y());
    }

    normalize(): Vector
    {
        return this.divide(this.length());
    }
}

export default Vector;
