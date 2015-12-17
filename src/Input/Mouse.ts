import Vector from './../Math/Vector';
import canvas from './../System/Canvas';

class Mouse
{
    public position: Vector;
    private buttons: Array<number> = [];
    private onMoveCallbacks: Array<Function> = [];

    constructor()
    {
        this.position = new Vector(0, 0);
        this.buttons = [0, 0, 0];
    }

    updatePosition(event: MouseEvent): void
    {
        var canvasRect = canvas.getBoundingClientRect();
        this.position = new Vector(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
        this.onMoveCallbacks.forEach(function(callback) {
            callback();
        });
    }

    buttonDown(event: MouseEvent): void
    {
        this.buttons[event.button] = 1;
    }

    buttonUp(event: MouseEvent): void
    {
        this.buttons[event.button] = 0;
    }

    onMove(callback: Function): void
    {
        this.onMoveCallbacks.push(callback);
    }
}

export default new Mouse();
