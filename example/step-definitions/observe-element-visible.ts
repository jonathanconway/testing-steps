import { defineStep } from "../../lib";
import { Context } from "../test.types";

defineStep(
  "observe the following {elementType} is visible: {elementLabel}",
  ({ elementLabel }, { paymentPageWrapper }: Context) => {
    switch (elementLabel) {
      case "Max amount":
        expect(paymentPageWrapper.isMaxCurrencyButtonVisible).toBeTruthy();
        break;
    }
  }
);
