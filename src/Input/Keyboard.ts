class Keyboard
{
    static KEY_ENTER: number = 13;
    static KEY_SPACE: number = 32;
    static KEY_LEFT: number = 37;
    static KEY_UP: number = 38;
    static KEY_RIGHT: number = 39;
    static KEY_DOWN: number = 40;
    static KEY_A: number = 65;
    static KEY_D: number = 68;
    static KEY_S: number = 83;
    static KEY_W: number = 87;

    private static keys: Array<number> = [];

    public static init():void
    {
        document.addEventListener('keydown', Keyboard.addKey.bind(this), true);
        document.addEventListener('keyup', Keyboard.removeKey.bind(this), true);
    }

    public static addKey(event: KeyboardEvent):void
    {
        if (-1 == Keyboard.keys.indexOf(event.keyCode)) {
            Keyboard.keys.push(event.keyCode);
        }
    }

    public static removeKey(event: KeyboardEvent):void
    {
        var index = Keyboard.keys.indexOf(event.keyCode);
        if (index != -1) {
            Keyboard.keys.splice(index, 1);
        }
    }

    public static isUp():boolean
    {
        if (-1 != Keyboard.keys.indexOf(Keyboard.KEY_UP)) {
            return true;
        }

        return -1 != Keyboard.keys.indexOf(Keyboard.KEY_W);
    }

    public static isDown():boolean
    {
        if (-1 != Keyboard.keys.indexOf(Keyboard.KEY_DOWN)) {
            return true;
        }

        return -1 != Keyboard.keys.indexOf(Keyboard.KEY_S);
    }

    public static isLeft():boolean
    {
        if (-1 != Keyboard.keys.indexOf(Keyboard.KEY_LEFT)) {
            return true;
        }

        return -1 != Keyboard.keys.indexOf(Keyboard.KEY_A);
    }

    public static isRight():boolean
    {
        if (-1 != Keyboard.keys.indexOf(Keyboard.KEY_RIGHT)) {
            return true;
        }

        return -1 != Keyboard.keys.indexOf(Keyboard.KEY_D);
    }
}

export default Keyboard;
