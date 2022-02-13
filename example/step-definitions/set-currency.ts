import { defineStep } from "../../lib";
import { Context } from "../test.types";

defineStep(
  "set the {direction} currency to {currency}",
  ({ direction, currency }, { paymentPageWrapper }: Context) => {
    switch (direction.toLowerCase()) {
      case "source":
        paymentPageWrapper.setFromCurrency(currency);
        break;
      case "destination":
        paymentPageWrapper.setToCurrency(currency);
        break;
    }
  }
);
