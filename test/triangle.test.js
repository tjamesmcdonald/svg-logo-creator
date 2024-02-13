const Triangle = require("../lib/Shapes/Triangle");
describe("Triangle", () => {
  it("should output a new logo with a blue triangle and red NPM", () => {
    const triangle = new Triangle("blue", "NPM", "red");
    expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,15 300,150 0,150" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">NPM</text>
        </svg>
        `);
  });
});
