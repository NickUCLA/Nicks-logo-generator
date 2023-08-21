const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
// Imports required modules: fs for file system operations, inquirer for interactive prompts, and the shape classes.

class Svg {
  constructor() {
    // Initializes an SVG object with empty text and shape elements.
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    // Renders an SVG string with specified dimensions and includes text and shape elements.
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    // Sets the text element with the provided text and font color.
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    // Sets the shape element by rendering the specified shape object.
    this.shapeElement = shape.render();
  }
}

const prompts = [
  // An array of prompts for user input.
  {
    type: "input",
    name: "textContent",
    message: "Enter up to 3 characters for the text:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or a hexadecimal color for text:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword or a hexadecimal color for shape:",
  },
  {
    type: "list",
    name: "selectedShape",
    message: "Choose a shape: Circle, Square, or Triangle:",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function writeFile(fileName, data) {
  // Writes the SVG data to a file with the provided filename.
  console.log(`Writing [${data}] to file [${fileName}]`);
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Logo.svg generated successfully!");
  });
}

async function initialize() {
  // Initializes the SVG generation process by gathering user input and creating the SVG string.
  console.log("Initializing...");
  let svgString = "";
  const svgFile = "logo.svg";

  const answers = await inquirer.prompt(prompts);

  const userInputText =
    answers.textContent.length > 0 && answers.textContent.length < 4
      ? answers.textContent
      : (console.log("Invalid user text. Enter 1 to 3 characters."),
        process.exit(1));

  console.log("User text: [" + userInputText + "]");
  const userFontColor = answers.textColor;
  console.log("User font color: [" + userFontColor + "]");
  const userShapeColor = answers.shapeColor;
  console.log("User shape color: [" + userShapeColor + "]");
  const userSelectedShape = answers.selectedShape.toLowerCase();
  console.log("User selected shape: [" + userSelectedShape + "]");

  let userShape;

  if (userSelectedShape === "circle") {
    userShape = new Circle();
    console.log("User selected Circle shape");
  } else if (userSelectedShape === "square") {
    userShape = new Square();
    console.log("User selected Square shape");
  } else if (userSelectedShape === "triangle") {
    userShape = new Triangle();
    console.log("User selected Triangle shape");
  } else {
    console.log("Invalid shape!");
    return;
  }

  userShape.setColor(userShapeColor);

  const svgInstance = new Svg();
  svgInstance.setTextElement(userInputText, userFontColor);
  svgInstance.setShapeElement(userShape);
  svgString = svgInstance.render();

  console.log("Generated shape:\n\n" + svgString);

  console.log("Shape generation complete!");
  console.log("Writing shape to file...");
  writeFile(svgFile, svgString);
}

initialize();
