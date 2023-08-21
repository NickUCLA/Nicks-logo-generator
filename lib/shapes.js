class Shape {
  // The Shape class defines a shape with a 'color' property and methods for setting the color.

  constructor() {
    // Initializes the 'color' property to an empty string.
    this.color = "";
  }

  setColor(color) {
    // Sets the 'color' property of the shape instance.
    this.color = color;
  }
}

class Circle extends Shape {
  // The Circle class extends the Shape class and represents an SVG circle.

  render() {
    // Renders an SVG circle with position, size, and fill color based on the shape's color.
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  // The Square class extends the Shape class and represents an SVG square.

  render() {
    // Renders an SVG square with position, size, and fill color based on the shape's color.
    return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  // The Triangle class extends the Shape class and represents an SVG triangle (polygon).

  render() {
    // Renders an SVG triangle (polygon) with position, size, and fill color based on the shape's color.
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
