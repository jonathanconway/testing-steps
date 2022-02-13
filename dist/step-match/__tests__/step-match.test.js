"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const step_1 = require("../../step");
const step_definition_1 = require("../../step-definition");
const step_match_1 = require("../step-match");
const step_match_mocks_1 = require("../step-match.mocks");
describe("step-match", () => {
    describe("getMatch", () => {
        it("returns match object, which can be used to run a step using a step definition", () => {
            const match = (0, step_match_1.getMatch)(step_1.MOCK_STEP_1, step_definition_1.MOCK_STEP_DEFINITION_PARSED);
            expect(match).toEqual(step_match_mocks_1.MOCK_STEP_MATCH);
        });
    });
});
