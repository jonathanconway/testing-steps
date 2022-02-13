"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const step_mocks_1 = require("../../step/step.mocks");
const step_definition_1 = require("../step-definition");
const step_definition_mocks_1 = require("../step-definition.mocks");
describe("step-definitions", () => {
    describe("getStepDefinitionParams", () => {
        it("returns correct list of the props of the first parameter of fn", () => {
            const params = (0, step_definition_1.getStepDefinitionParams)(step_definition_mocks_1.MOCK_STEP_DEFINITION);
            expect(params).toEqual(["a", "b", "c"]);
        });
    });
    describe("generateTemplateRegExp", () => {
        it("returns a regexp which can match any string that conforms to the template", () => {
            const templateRegExp = (0, step_definition_1.generateTemplateRegExp)(step_definition_mocks_1.MOCK_PARAMS, step_definition_mocks_1.MOCK_TEMPLATE);
            expect(step_mocks_1.MOCK_STEP_1.match(templateRegExp)).toBeTruthy();
            expect(step_mocks_1.MOCK_STEP_2.match(templateRegExp)).toBeTruthy();
            expect(step_mocks_1.MOCK_STEP_3.match(templateRegExp)).toBeTruthy();
            expect(step_mocks_1.MOCK_INVALID_STEP_1.match(templateRegExp)).toBeFalsy();
            expect(step_mocks_1.MOCK_INVALID_STEP_2.match(templateRegExp)).toBeFalsy();
        });
    });
});
