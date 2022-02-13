import { MOCK_STEP_1 } from "../../step";
import { MOCK_STEP_DEFINITION_PARSED } from "../../step-definition";
import { getMatch } from "../step-match";
import { MOCK_STEP_MATCH } from "../step-match.mocks";

describe("step-match", () => {
  describe("getMatch", () => {
    it("returns match object, which can be used to run a step using a step definition", () => {
      const match = getMatch(MOCK_STEP_1, MOCK_STEP_DEFINITION_PARSED);

      expect(match).toEqual(MOCK_STEP_MATCH);
    });
  });
});
