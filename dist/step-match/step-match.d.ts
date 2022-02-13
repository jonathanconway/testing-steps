import { StepDefinition, StepDefinitionParsed } from "../step-definition/step-definition";
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
export declare function getMatch(step: Step, definition: StepDefinitionParsed): StepMatch | undefined;
export declare function findMatch(step: Step, definitions: readonly StepDefinitionParsed[]): StepMatch | undefined;
