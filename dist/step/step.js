"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSteps = void 0;
const step_list_1 = require("../step-list");
const __1 = require("..");
function runSteps(context, stepString) {
    const steps = (0, step_list_1.getSteps)(stepString !== null && stepString !== void 0 ? stepString : expect.getState().currentTestName);
    steps.forEach((step) => {
        const match = (0, __1.findMatch)(step, __1.stepDefinitions);
        match === null || match === void 0 ? void 0 : match.definition.fn(match.paramValues, context);
    });
}
exports.runSteps = runSteps;
