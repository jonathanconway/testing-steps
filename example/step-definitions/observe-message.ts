import { defineStep } from "../../lib";
import { Context } from "../test.types";

defineStep(
  "observe the following {messageType} message: {message}",
  ({ messageType, message }, { paymentPageWrapper }: Context) => {
    switch (messageType) {
      case "error":
        expect(paymentPageWrapper.errorMessage?.toLowerCase()).toEqual(
          message.toLowerCase()
        );
        break;
      case "success":
        expect(paymentPageWrapper.successMessage?.toLowerCase()).toEqual(
          message.toLowerCase()
        );
        break;
    }
  }
);
