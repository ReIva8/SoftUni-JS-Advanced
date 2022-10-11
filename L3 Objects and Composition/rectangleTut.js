function rectangleTut(width, height, color) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color[0].toUpperCase() + color.slice(1);
        }
        calcArea() {
            return this.height * this.width;
        }
    }
    return new Rectangle(width, height, color);
}
    let rect = rectangleTut(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


