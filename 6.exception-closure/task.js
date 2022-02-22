

function parseCount(value) {
    let number = Number.parseInt(value);
    if (!isNaN(number)) {
        return number;
    }
    else {
        throw new Error('Невалидное значение');
    }
}

function validateCount(value) {
    try {
        return parseCount(value)
    }
    catch (error) {
        return (error)
    }
}




class Triangle {
    constructor(a, b, c) {
        this.a = a,
            this.b = b,
            this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

    }
    getPerimeter() {
        return this.a + this.b + this.c;

    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let s = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return s
    }

}

function getTriangle(a, b, c) {
    let getArea = function () {
        return "Ошибка! Треугольник не существует"
    }
    let getPerimeter = function () {
        return "Ошибка! Треугольник не существует"
    }
    try {
        let newTriangle = new Triangle(a, b, c)
        return newTriangle;
    } catch (error) {
        return { getPerimeter, getArea }
    }
}
