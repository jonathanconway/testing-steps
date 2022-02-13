/**
 * Template string which can be used to match a step with a step definition.
 */
export declare type StepTemplate = string;
/**
 * Function which implements a step definition.
 * @param params Object containing parameters defined in the template and
 * values provided in the {StepTemplate}.
 * @param context Shared context object passed to all step functions,
 * allowing for injection of shared state, utilities, etc.
 */
export declare type StepFunction<T = {} | undefined> = (params: Record<string, string>, context: T) => void;
/**
 * Defines a test function, which can be matched with a Step via a template,
 * in order to execute that Step.
 */
export interface StepDefinition {
    readonly template: StepTemplate;
    readonly fn: StepFunction;
}
/**
 * Defines a test function, which can be matched with a Step via an executable
 * RegExp, in order to execute that Step.
 */
export interface StepDefinitionParsed extends StepDefinition {
    readonly params: readonly string[];
    readonly templateRegExp: RegExp;
}
/**
 * Uses a template string to generate a RegExp which will match a Step and
 * allow the values of its parameters to be accessed.
 */
export declare function generateTemplateRegExp(params: readonly string[], template: string): RegExp;
/**
 * Parses the template of a StepDefinition andre turns the list of parameter
 * names that it defines.
 * @param stepDefinition StepDefinition whose template to parse
 * @returns List of parameters discovered
 */
export declare function getStepDefinitionParams(stepDefinition: StepDefinition): readonly string[];
/**
 * Reads a StepDefinition and produces a StepDefinitionParsed which can be used
 * to: A) match this StepDefinition with a Step and B) provide the parameters
 * of the Step to the StepDefinition in a structured form.
 * @param stepDefinition
 * @returns List of StepDefinitionParsed which can be used to run a step.
 */
export declare function parseStepDefinition(stepDefinition: StepDefinition): StepDefinitionParsed;
export declare const stepDefinitions: StepDefinitionParsed[];
/**
 * Create a step definition, which consists of a template (used to match it
 * with a step) and a function (which executes on the step being reached).
 * @param template String with template with parameter names, each wrapped
 * in curly braces. The template is case-insensitive, except for the
 * parameter names, which are case-sensitive.
 * @param fn Function which runs when a step is matched with {template}.
 * The values matching the parameter places defined in the {template} are
 * passed to {fn} as named properties of the first parameter.
 */
export declare function defineStep(template: StepTemplate, fn: StepFunction): void;
