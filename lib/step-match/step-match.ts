import {
  StepDefinition,
  StepDefinitionParsed,
} from "../step-definition/step-definition";
import { Step } from "../step/step";

/**
 * Match between a Step and a StepDefinition, packaging the matched
 * StepDefinition with the parameters provided in the Step string,
 * in a structured form that can be passed to the StepDefinition
 * function.
 */
export interface StepMatch {
  readonly definition: StepDefinition;
  readonly paramValues: Record<string, string>;
}

/**
 * Checks if the given Step matches the given StepDefinitionParsed.
 * @returns The StepMatch if matched; otherwise undefined.
 */
export function getMatch(
  step: Step,
  definition: StepDefinitionParsed
): StepMatch | undefined {
  const [regExpMatch] = Array.from(
    step.toLowerCase().matchAll(definition.templateRegExp)
  );
  if (regExpMatch) {
    const paramValues = { ...regExpMatch.groups };
    if (paramValues) {
      return { definition, paramValues };
    }
  }
  return undefined;
}

export function findMatch(
  step: Step,
  definitions: readonly StepDefinitionParsed[]
): StepMatch | undefined {
  for (const definition of definitions) {
    const match = getMatch(step, definition);
    if (match) {
      return match;
    }
  }
}
