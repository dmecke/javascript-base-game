class Keyboard
{
    private keys: Array<number> = [];
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

    constructor()
    {
        document.addEventListener('keydown', this.addKey.bind(this), true);
        document.addEventListener('keyup', this.removeKey.bind(this), true);
    }

    addKey(event: KeyboardEvent)
    {
        if (-1 == this.keys.indexOf(event.keyCode)) {
            this.keys.push(event.keyCode);
        }
    }

    removeKey(event: KeyboardEvent)
    {
        var index = this.keys.indexOf(event.keyCode);
        if (index != -1) {
            this.keys.splice(index, 1);
        }
    }

    isUp()
    {
        if (-1 != this.keys.indexOf(Keyboard.KEY_UP)) {
            return true;
        }

        return -1 != this.keys.indexOf(Keyboard.KEY_W);
    }

    isDown()
    {
        if (-1 != this.keys.indexOf(Keyboard.KEY_DOWN)) {
            return true;
        }

        return -1 != this.keys.indexOf(Keyboard.KEY_S);
    }

    isLeft()
    {
        if (-1 != this.keys.indexOf(Keyboard.KEY_LEFT)) {
            return true;
        }

        return -1 != this.keys.indexOf(Keyboard.KEY_A);
    }

    isRight()
    {
        if (-1 != this.keys.indexOf(Keyboard.KEY_RIGHT)) {
            return true;
        }

        return -1 != this.keys.indexOf(Keyboard.KEY_D);
    }
}

export default Keyboard;
