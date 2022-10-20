
function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        convertParams(param) {
            const obj = {
                m: (param) => param /= 10,
                cm: (param) => param,
                mm: (param) => param *= 10
            }
            return obj[this.units](param);
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this.convertParams(this._radius);
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }

    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.convertParams(this._width);
        }

        get height() {
            return this.convertParams(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}