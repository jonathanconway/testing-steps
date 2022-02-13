"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const step_list_1 = require("../step-list");
const step_list_mocks_1 = require("../step-list.mocks");
describe("step-list", () => {
    describe("getSteps", () => {
        it("returns a parsed list of steps without the numbers", () => {
            const steps = (0, step_list_1.getSteps)(`
        1. step one
        2. step two

        3. step three
      `);
            expect(steps).toEqual(step_list_mocks_1.MOCK_STEP_LIST);
        });
    });
});
