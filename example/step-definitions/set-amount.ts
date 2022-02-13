import { defineStep } from "../../lib";
import { Context } from "../test.types";
import { parseNumber } from "../test.utils";

defineStep(
  "set the payment amount to {amountString}",
  ({ amountString }, { paymentPageWrapper }: Context) => {
    const amount = parseNumber(amountString);
    paymentPageWrapper.setAmount(amount);
  }
);
