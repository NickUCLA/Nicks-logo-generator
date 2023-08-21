const { Circle, Square, Triangle } = require("./shapes");
// Import the Circle, Square, and Triangle shape classes from 'shapes.js' module.

// Define test suites for the Circle, Square, and Triangle shape classes. Each test case checks if the corresponding shape object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    const color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`
    );
  });
});

// Square Shape
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    const color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${color}" />`
    );
  });
});

// Triangle Shape
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    const color = "pink";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}" />`
    );
  });
});
