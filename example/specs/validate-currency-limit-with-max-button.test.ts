import { runSteps } from "../../lib";

import "../step-definitions";
import { PaymentPageWrapper } from "./payment-page-wrapper";

const paymentPageWrapper = new PaymentPageWrapper();

describe("validate-currency-limit-with-max-button", () => {
  it(`
    1. Log in as a registered user
    2. Assume a balance of 100,000 GBP
    3. Assume a maximum conversion from GBP to CAD of 50,000
    4. Go to the Make a Payment screen
    5. Set the Source currency to GBP
    5. Set the Destination currency to CAD
    6. Set the Payment amount to 51,000
    7. Observe the following error message: Currency conversion over daily payment limit
    8. Observe the following button is visible: Max amount
    9. Click Max amount button  
    10. Click Submit payment button
    11. Observe the following success message: Payment successful
  `, () => {
    runSteps({ paymentPageWrapper });
  });
});
