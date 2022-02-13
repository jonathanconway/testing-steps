import { defineStep } from "../..";
import {
  MOCK_INVALID_STEP_1,
  MOCK_INVALID_STEP_2,
  MOCK_STEP_1,
  MOCK_STEP_2,
  MOCK_STEP_3,
} from "../../step/step.mocks";
import { runSteps } from "../step";

describe("step", () => {
  describe("runSteps", () => {
    it("runs all and only matching step functions, passing parameters and context", () => {
      const step1Fn = jest.fn(({ a, b, c }) => {});
      const step2Fn = jest.fn(({ a, b }) => {});

      defineStep("one {a} two {b} three {c}", step1Fn);

      defineStep("a {a} b {b}", step2Fn);

      runSteps(
        { contextTestProp: "contextTestPropValue" },
        `
        1. one 1 two 2 three 3
        2. a 11 b 22
      `
      );

      expect(step1Fn).toHaveBeenCalledWith(
        expect.objectContaining({
          a: "1",
          b: "2",
          c: "3",
        }),
        expect.objectContaining({
          contextTestProp: "contextTestPropValue",
        })
      );

      expect(step2Fn).toHaveBeenCalledWith(
        expect.objectContaining({
          a: "11",
          b: "22",
        }),
        expect.objectContaining({
          contextTestProp: "contextTestPropValue",
        })
      );
    });
  });
});
