import { Step } from "../step";
/**
 * Parses a numbered list of steps in a string to a list of individual {Step}
 * objects.
 * @param stepsList Numbered list of steps in a string. E.g. `1. x \n 2. y`
 * @returns List of steps in the same order, but without the numbering.
 */
export declare function getSteps(stepsList: string): readonly Step[];
