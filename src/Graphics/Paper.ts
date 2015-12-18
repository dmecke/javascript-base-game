import Vector from "../Math/Vector";

class Paper
{
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D)
    {
        this.context = context;
    }

    strokeStyle(style: string): void
    {
        this.context.strokeStyle = style;
    }

    fillStyle(style: string): void
    {
        this.context.fillStyle = style;
    }

    arc(position: Vector, radius: number, startAngle: number, endAngle: number): void
    {
        this.context.arc(position.x(), position.y(), radius, startAngle, endAngle);
    }

    rect(position: Vector, width: number, height: number): void
    {
        this.context.rect(position.x(), position.y(), width, height);
    }

    text(position: Vector, text: string): void
    {
        this.context.font = '12px Arial';
        this.context.strokeText(text, position.x(), position.y());
        this.context.fillText(text, position.x(), position.y());
    }

    beginPath(): void
    {
        this.context.beginPath();
    }

    closePath(): void
    {
        this.context.closePath();
    }

    stroke(): void
    {
        this.context.stroke();
    }

    fill(): void
    {
        this.context.fill();
    }
}

export default Paper
