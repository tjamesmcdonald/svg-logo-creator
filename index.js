const inquirer = require("inquirer");
const fs = require("fs");
const getShape = require("./lib/getShape");

const prompts = [
  {
    type: "list",
    name: "shape",
    message: "Logo Shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Logo Color:",
  },
  {
    type: "input",
    message: "Logo Text:",
    name: "text",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log("\n Text must be less than 4 Characters");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Text Color",
    name: "textColor",
  },
];

function createLogo(response) {
  const svg = getShape(response);
  fs.writeFile(`./output/${response.text}logo.svg`, svg, () =>
    console.log("Logo Created!")
  );
}

function init() {
  inquirer.prompt(prompts).then((response) => {
    createLogo(response);
  });
}

init();
