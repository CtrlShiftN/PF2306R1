class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }
}

// xác định va chạm giữa 2 hình chữ nhật (đối tượng Rect)
function isCollision(rect1, rect2) {
    let distX = rect1.x + rect1.w / 2 - (rect2.x + rect2.w / 2);
    if (distX < 0) distX = -distX;

    const distW = (rect1.w + rect2.w) / 2;

    let distY = rect1.y + rect1.h / 2 - (rect2.y + rect2.h / 2);
    if (distY < 0) distY = -distY;

    const distH = (rect1.h + rect2.h) / 2;

    return distX <= distW && distY <= distH;
}
var r1 = new Rect(5, 3, 4, 6);
let r2 = new Rect(9, 3, 4, 6);
console.log(isCollision(r1, r2));
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(_o, _r) {
        this.o = _o;
        this.r = _r;
    }
}

function distance2(A, B) {
    return (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);
}

function checkCollision(c1, c2) {
    return (c1.r + c2.r) * (c1.r + c2.r) >= distance2(c1.o, c2.o);
}
let p1 = new Point(2, 6);
let p2 = new Point(10, 7);

let c1 = new Circle(p1, 3);
let c2 = new Circle(p2, 4);

if (checkCollision(c1, c2)) console.log("AB");
else console.log("A   B");
