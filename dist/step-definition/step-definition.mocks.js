"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_STEP_DEFINITION_PARSED = exports.MOCK_STEP_DEFINITION = exports.MOCK_TEMPLATE_REGEXP = exports.MOCK_TEMPLATE = exports.MOCK_PARAMS = exports.MOCK_FUNCTION = void 0;
const MOCK_FUNCTION = ({ a, b, c }) => { };
exports.MOCK_FUNCTION = MOCK_FUNCTION;
exports.MOCK_PARAMS = ["a", "b", "c"];
exports.MOCK_TEMPLATE = "one {a} two {b} three {c} four";
exports.MOCK_TEMPLATE_REGEXP = new RegExp("one (?<a>.*) two (?<b>.*) three (?<c>.*) four", "g");
exports.MOCK_STEP_DEFINITION = {
    fn: exports.MOCK_FUNCTION,
    template: exports.MOCK_TEMPLATE,
};
exports.MOCK_STEP_DEFINITION_PARSED = Object.assign(Object.assign({}, exports.MOCK_STEP_DEFINITION), { params: exports.MOCK_PARAMS, fn: exports.MOCK_FUNCTION, templateRegExp: exports.MOCK_TEMPLATE_REGEXP, template: exports.MOCK_TEMPLATE });
