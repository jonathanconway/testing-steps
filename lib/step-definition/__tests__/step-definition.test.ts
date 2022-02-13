import {
  MOCK_INVALID_STEP_1,
  MOCK_INVALID_STEP_2,
  MOCK_STEP_1,
  MOCK_STEP_2,
  MOCK_STEP_3,
} from "../../step/step.mocks";
import {
  generateTemplateRegExp,
  getStepDefinitionParams,
} from "../step-definition";
import {
  MOCK_PARAMS,
  MOCK_STEP_DEFINITION,
  MOCK_TEMPLATE,
} from "../step-definition.mocks";

describe("step-definitions", () => {
  describe("getStepDefinitionParams", () => {
    it("returns correct list of the props of the first parameter of fn", () => {
      const params = getStepDefinitionParams(MOCK_STEP_DEFINITION);
      expect(params).toEqual(["a", "b", "c"]);
    });
  });

  describe("generateTemplateRegExp", () => {
    it("returns a regexp which can match any string that conforms to the template", () => {
      const templateRegExp = generateTemplateRegExp(MOCK_PARAMS, MOCK_TEMPLATE);

      expect(MOCK_STEP_1.match(templateRegExp)).toBeTruthy();
      expect(MOCK_STEP_2.match(templateRegExp)).toBeTruthy();
      expect(MOCK_STEP_3.match(templateRegExp)).toBeTruthy();

      expect(MOCK_INVALID_STEP_1.match(templateRegExp)).toBeFalsy();
      expect(MOCK_INVALID_STEP_2.match(templateRegExp)).toBeFalsy();
    });
  });
});
