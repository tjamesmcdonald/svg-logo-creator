const Circle = require("../lib/Shapes/Circle");
describe("Circle", () => {
  it("should output a new logo with a blue circle and red NPM", () => {
    const circle = new Circle("blue", "NPM", "red");
    expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">NPM</text>
        </svg>
        `);
  });
});
