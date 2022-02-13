import { defineStep } from "../../lib";
import { Context } from "../test.types";

defineStep(
  "click {elementLabel}",
  ({ elementLabel }, { paymentPageWrapper }: Context) => {
    switch (elementLabel.toLowerCase()) {
      case "max amount button":
        paymentPageWrapper.clickMaxCurrencyButton();
        break;
      case "submit payment button":
        paymentPageWrapper.clickSubmit();
        break;
    }
  }
);
