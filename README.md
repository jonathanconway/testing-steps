# Testing steps

> An acceptance testing language organized as an ordered list of steps.

This alternative to BDD allows you to specify your tests as simple numbered lists of testing steps. A template system allows you to define parameterized functions which will run your steps.

## Installation

```
npm install testing-steps --save-dev
```

## Usage

First, you need to define your steps. You can do this by calling `defineStep`, passing a template string for matching with steps along with a function that will execute a given step.

```javascript
import { defineStep } from "testing-steps";

class Adder {
  sum = 0;

  add(first, second) {
    console.log("Add called.");
    this.sum = first + second;
  }
}

const adder = new Adder();

defineStep("add {first} and {second}", ({ first, second }) => {
  adder.add(parseInt(first), parseInt(second));
});

defineStep("observe that sum is {expectedSum}", ({ expectedSum }) => {
  expect(adder.sum).toEqual(parseInt(expectedSum));
});
```

Now that your steps are defined, you can run them by calling `runSteps`.

```javascript
describe("adder", () => {
  test(`
    1. Add 2 and 3
    2. Observe that sum is 5
  `, () => {
    runSteps();
  });
});
```

This will parse the steps listed in the test string and call the defined test functions with the appropriate parameters.

## API

### `defineStep(template, fn)`

Creates a step definition, which consists of a template (used to match it with a step) and a function (which executes on the step being reached).

#### template

String with template with parameter names, each wrapped in curly braces. The template is case-insensitive, except for the parameter names, which are case-sensitive.

Example: `"add {firstNumber} and {secondNumber}"`

#### fn

Function which runs when a step is matched with {template}. The values matching the parameter places defined in the {template} are passed to {fn} as named properties of the first parameter.

Example: `function ({ firstNumber, secondNumber }) { }`.

### `runSteps(context)`

Runs the steps defined in the test name.

Intended to be used within a `test` or `it` block in a Jest or Jasmine test.

#### context

(Optional) Object which is shared with all step functions, passed as the second parameter. Useful for sharing functions/objects such as utilities or global state.

Example: `{ mockUserName: 'xyz' }`
