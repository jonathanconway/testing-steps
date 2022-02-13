"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineStep = exports.stepDefinitions = exports.parseStepDefinition = exports.getStepDefinitionParams = exports.generateTemplateRegExp = void 0;
/**
 * Uses a template string to generate a RegExp which will match a Step and
 * allow the values of its parameters to be accessed.
 */
function generateTemplateRegExp(params, template) {
    const stepParamsRegExpStr = params.reduce((template, param) => template.replace(new RegExp(`{${param.toLowerCase()}}`, "g"), `(?<${param}>.*)`), template.toLowerCase());
    const stepParamsRegExp = new RegExp(stepParamsRegExpStr, "g");
    return stepParamsRegExp;
}
exports.generateTemplateRegExp = generateTemplateRegExp;
/**
 * Parses the template of a StepDefinition andre turns the list of parameter
 * names that it defines.
 * @param stepDefinition StepDefinition whose template to parse
 * @returns List of parameters discovered
 */
function getStepDefinitionParams(stepDefinition) {
    const regex = /{([^}]*)}/g;
    const matches = [];
    let match = undefined;
    while ((match = regex.exec(stepDefinition.template))) {
        matches.push(match[1]);
    }
    return matches;
}
exports.getStepDefinitionParams = getStepDefinitionParams;
/**
 * Reads a StepDefinition and produces a StepDefinitionParsed which can be used
 * to: A) match this StepDefinition with a Step and B) provide the parameters
 * of the Step to the StepDefinition in a structured form.
 * @param stepDefinition
 * @returns List of StepDefinitionParsed which can be used to run a step.
 */
function parseStepDefinition(stepDefinition) {
    const params = getStepDefinitionParams(stepDefinition);
    const templateRegExp = generateTemplateRegExp(params, stepDefinition.template);
    return Object.assign(Object.assign({}, stepDefinition), { params,
        templateRegExp });
}
exports.parseStepDefinition = parseStepDefinition;
exports.stepDefinitions = [];
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
function defineStep(template, fn) {
    exports.stepDefinitions.push(parseStepDefinition({
        template,
        fn,
    }));
}
exports.defineStep = defineStep;
