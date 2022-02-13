/**
 * Describes an action, event, observation, etc. within an ordered list of testing steps.
 */
export declare type Step = string;
export declare function runSteps<T>(context?: T, stepString?: string): void;
