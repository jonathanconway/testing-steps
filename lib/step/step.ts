import { getSteps } from "../step-list";
import { findMatch, stepDefinitions } from "..";

/**
 * Describes an action, event, observation, etc. within an ordered list of testing steps.
 */
export type Step = string;

export function runSteps<T>(context?: T, stepString?: string) {
  const steps = getSteps(stepString ?? expect.getState().currentTestName);

  steps.forEach((step) => {
    const match = findMatch(step, stepDefinitions);
    match?.definition.fn(match.paramValues, context);
  });
}
