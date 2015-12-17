class Keyboard
{
    private keys;
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
        this.keys = [];
    }

    addKey(keyCode)
    {
        if (-1 == this.keys.indexOf(keyCode)) {
            this.keys.push(keyCode);
        }
    }

    removeKey(keyCode)
    {
        var index = this.keys.indexOf(keyCode);
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

export default new Keyboard();
