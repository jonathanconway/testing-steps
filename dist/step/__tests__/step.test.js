"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const step_1 = require("../step");
describe("step", () => {
    describe("runSteps", () => {
        it("runs all and only matching step functions, passing parameters and context", () => {
            const step1Fn = jest.fn(({ a, b, c }) => { });
            const step2Fn = jest.fn(({ a, b }) => { });
            (0, __1.defineStep)("one {a} two {b} three {c}", step1Fn);
            (0, __1.defineStep)("a {a} b {b}", step2Fn);
            (0, step_1.runSteps)({ contextTestProp: "contextTestPropValue" }, `
        1. one 1 two 2 three 3
        2. a 11 b 22
      `);
            expect(step1Fn).toHaveBeenCalledWith(expect.objectContaining({
                a: "1",
                b: "2",
                c: "3",
            }), expect.objectContaining({
                contextTestProp: "contextTestPropValue",
            }));
            expect(step2Fn).toHaveBeenCalledWith(expect.objectContaining({
                a: "11",
                b: "22",
            }), expect.objectContaining({
                contextTestProp: "contextTestPropValue",
            }));
        });
    });
});
