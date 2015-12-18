import Mouse from "./Mouse";
import Keyboard from "./Keyboard";

class Input
{
    private static instance: Input;

    public mouse: Mouse;
    public keyboard: Keyboard;

    constructor()
    {
        this.mouse = new Mouse();
        this.keyboard = new Keyboard();
    }

    static create()
    {
        if (!Input.instance) {
            Input.instance = new Input();
        }

        return Input.instance;
    }
}

export default Input;
