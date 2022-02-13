"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatch = exports.getMatch = void 0;
/**
 * Checks if the given Step matches the given StepDefinitionParsed.
 * @returns The StepMatch if matched; otherwise undefined.
 */
function getMatch(step, definition) {
    const [regExpMatch] = Array.from(step.toLowerCase().matchAll(definition.templateRegExp));
    if (regExpMatch) {
        const paramValues = Object.assign({}, regExpMatch.groups);
        if (paramValues) {
            return { definition, paramValues };
        }
    }
    return undefined;
}
exports.getMatch = getMatch;
function findMatch(step, definitions) {
    for (const definition of definitions) {
        const match = getMatch(step, definition);
        if (match) {
            return match;
        }
    }
}
exports.findMatch = findMatch;
