const Square = require("../lib/Shapes/Square");
describe("Square", () => {
  it("should output a new logo with a blue square and red NPM", () => {
    const square = new Square("blue", "NPM", "red");
    expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="red">NPM</text>
        </svg>
        `);
  });
});
