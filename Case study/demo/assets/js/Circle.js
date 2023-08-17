class Circle {
    constructor(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = "#ffffff";
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    getRadius() {
        return this._radius;
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
    updatePosition(x, y) {
        this._x = x;
        this._y = y;
    }
    draw(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
    clear(elementID) {
        let canvas = document.getElementById(elementID);
        let ctx = canvas.getContext("2d");
        ctx.clearRect(
            this._x - this._radius,
            this._y - this._radius,
            this._radius ** 2,
            this._radius ** 2
        );
    }
    isCollisionCircle(otherCircle) {
        let distanceBetweenTwoPoints =
            Math.pow(this._x - otherCircle.getX(), 2) +
            Math.pow(this._y - otherCircle.getY(), 2);
        return (
            distanceBetweenTwoPoints <=
            Math.pow(this._radius + otherCircle.getRadius(), 2)
        );
    }
    isCollisionRect(rect) {
        let circleX = this._x;
        let circleY = this._y;
        let rectTopLeftX = rect.getX();
        let rectTopLeftY = rect.getY();
        let rectTopRightX = rect.getX() + rect.getWidth();
        let rectTopRightY = rect.getY() + rect.getHeight();

        if (circleX < rectTopLeftX) {
            circleX = rectTopLeftX;
        } else if (circleX > rectTopRightX) {
            circleX = rectTopRightX;
        }

        if (circleY < rectTopLeftY) {
            circleY = rectTopLeftY;
        } else if (circleY > rectTopRightY) {
            circleY = rectTopRightY;
        }

        let distanceX = this._x - circleX;
        let distanceY = this._y - circleY;
        return (
            Math.pow(distanceX, 2) + Math.pow(distanceY, 2) <=
            Math.pow(this._radius, 2)
        );
    }
}
