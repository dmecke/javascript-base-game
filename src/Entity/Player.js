Vector = require('./../Math/Vector.js');
Circle = require('./../Graphics/Circle.js');
mouse = require('./../Input/Mouse.js');
keyboard = require('./../Input/Keyboard.js');

function Player()
{
    this.position = new Vector(0, 0);
    this.mouse = mouse;
    this.keyboard = keyboard;

    this.update = function()
    {
        //this.position = this.position.add(new Vector(1, 1));
        //this.position = this.mouse.position;

        var x = 0;
        var y = 0;
        if (this.keyboard.isLeft()) {
            x += -1;
        }
        if (this.keyboard.isRight()) {
            x += 1;
        }
        if (this.keyboard.isUp()) {
            y += -1;
        }
        if (this.keyboard.isDown()) {
            y += 1;
        }
        this.position = this.position.add(new Vector(x, y));
    };

    this.render = function()
    {
        var circle = new Circle(this.position, 10);
        circle.strokeStyle = 'blue';
        circle.draw();
    }
}

module.exports = Player;
