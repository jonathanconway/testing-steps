import { defineStep } from "../../lib";
import { Context } from "../test.types";
import { parseNumber } from "../test.utils";

defineStep(
  "assume a balance of {amountString} {currency}",
  ({ amountString }, { paymentPageWrapper }: Context) => {
    const amount = parseNumber(amountString);

    paymentPageWrapper.setAmount(amount);
  }
);
