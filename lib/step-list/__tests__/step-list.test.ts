import { getSteps } from "../step-list";
import { MOCK_STEP_LIST } from "../step-list.mocks";

describe("step-list", () => {
  describe("getSteps", () => {
    it("returns a parsed list of steps without the numbers", () => {
      const steps = getSteps(`
        1. step one
        2. step two

        3. step three
      `);

      expect(steps).toEqual(MOCK_STEP_LIST);
    });
  });
});
