import {
  StepDefinition,
  StepDefinitionParsed,
  StepFunction,
} from "./step-definition";

export const MOCK_FUNCTION: StepFunction = ({ a, b, c }) => {};

export const MOCK_PARAMS = ["a", "b", "c"];

export const MOCK_TEMPLATE = "one {a} two {b} three {c} four";

export const MOCK_TEMPLATE_REGEXP = new RegExp(
  "one (?<a>.*) two (?<b>.*) three (?<c>.*) four",
  "g"
);

export const MOCK_STEP_DEFINITION: StepDefinition = {
  fn: MOCK_FUNCTION,
  template: MOCK_TEMPLATE,
};

export const MOCK_STEP_DEFINITION_PARSED: StepDefinitionParsed = {
  ...MOCK_STEP_DEFINITION,
  params: MOCK_PARAMS,
  fn: MOCK_FUNCTION,
  templateRegExp: MOCK_TEMPLATE_REGEXP,
  template: MOCK_TEMPLATE,
};
