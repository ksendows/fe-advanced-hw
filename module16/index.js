class Shape {
  constructor (color, initX, initY) {
    this.color = color;
    this.coords = {
      initX: initX,
      initY: initY 
    };
  }
  getColor() {
    return this.color;
  }
  setColor(val) {
    this.color = val;
  } 
  getCoords() {
    return this.coords;
  }
  moveTo(newX, newY) {
    this.coords.initX = newX;
    this.coords.initY = newY;
  }
}

class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super(color, initX, initY);
    this.dims = {
      width: initWidth,
      height: initHeight
    }
  }
  setWidth(newWidth) {
    this.dims.width = newWidth;
  }
  setHeight(newHeight) {
    this.dims.height = newHeight;
  }
  getDims() {
    return this.dims;
  }
  draw() {
    console.log(`Drawing a Rectangle at:\n
               (x: ${this.getCoords().initX}, y: ${this.getCoords().initY})\n 
                With dimensions:\n
                width: ${this.getDims().width}\n
                height: ${this.getDims().height}\n
                Filled with color: ${this.getColor()}`);
  }
}

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super(color, initX, initY);
    this.radius = initRadius
  }
  getRadius() {
    return this.radius;
  }
  setRadius(val) {
    this.radius = val;
  } 
  draw() {
    console.log(`Drawing a Circle at:\n
               (x: ${this.getCoords().initX}, y: ${this.getCoords().initY})\n 
                With dimensions:\n
                radius: ${this.getRadius()}\n
                Filled with color: ${this.getColor()}`);
  }
}

let rectange = new Rectangle("#09688", 10, 10, 100, 100);
rectange.draw();

let circle = new Circle("#FF5722", 50, 50, 250);
circle.draw();