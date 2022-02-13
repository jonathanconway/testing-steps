import { defineStep } from "../../lib";
import { Context } from "../test.types";
import { parseNumber } from "../test.utils";

defineStep(
  "assume a maximum conversion from {fromCurrency} to {toCurrency} of {maxAmountString}",
  (
    { maxAmountString, fromCurrency, toCurrency },
    { paymentPageWrapper }: Context
  ) => {
    const maxAmount = parseNumber(maxAmountString);

    paymentPageWrapper.setMaxConversion(fromCurrency, toCurrency, maxAmount);
  }
);
