"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSteps = void 0;
/**
 * Parses a numbered list of steps in a string to a list of individual {Step}
 * objects.
 * @param stepsList Numbered list of steps in a string. E.g. `1. x \n 2. y`
 * @returns List of steps in the same order, but without the numbering.
 */
function getSteps(stepsList) {
    const stepsListLines = stepsList.trim().split("\n");
    const steps = stepsListLines
        .map((line) => { var _a, _b; return (_b = (_a = line.trim().split(".")[1]) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ""; })
        .filter(Boolean);
    return steps;
}
exports.getSteps = getSteps;
