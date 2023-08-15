class Rect {
    constructor(x, y, width, height) {
        this._x = parseFloat(x);
        this._y = parseFloat(y);
        this._width = width;
        this._height = height;
        this._color = "#ffffff";
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    getColor() {
        return this._color;
    }
    setX(x) {
        this._x = parseFloat(x);
    }
    setY(y) {
        this._y = parseFloat(y);
    }
    setColor(color) {
        this._color = color;
    }
    draw(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this._color;
        ctx.fillRect(this._x, this._y, this._width, this._height);
    }
    isCollisionRect(otherRect) {
        let distX = Math.abs(
            this._x +
                this._width / 2 -
                (otherRect.getX() + otherRect.getWidth() / 2)
        );

        const distW = (this._width + otherRect.getWidth()) / 2;

        let distY =
            this._y +
            this._height / 2 -
            (otherRect.getY() + otherRect.getHeight() / 2);
        if (distY < 0) distY = -distY;

        const distH = (this._height + otherRect.getHeight()) / 2;

        return (distX <= distW && distY <= distH);
    }
}
