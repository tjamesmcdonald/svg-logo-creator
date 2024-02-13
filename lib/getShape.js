const Square = require("./Shapes/Square.js");
const Circle = require("./Shapes/Circle.js");
const Triangle = require("./Shapes/Triangle.js");

function getShape(response) {
  if (response.shape === "Square") {
    let shapeChoice = new Square(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return shapeChoice.render();
  }
  if (response.shape === "Circle") {
    let shapeChoice = new Circle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return shapeChoice.render();
  }

  if (response.shape === "Triangle") {
    let shapeChoice = new Triangle(
      response.shapeColor,
      response.text,
      response.textColor
    );
    return shapeChoice.render();
  }
}
module.exports = getShape;
