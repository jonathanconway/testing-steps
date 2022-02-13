import { defineStep } from "../../lib";
import { Context } from "../test.types";

defineStep(
  "log in as a {userType} user",
  ({ userType }, { paymentPageWrapper }: Context) => {
    paymentPageWrapper.loginAs(userType);
  }
);
