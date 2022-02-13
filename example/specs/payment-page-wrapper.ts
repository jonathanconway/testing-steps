interface Balance {
  amount: number;
  currency: Currency;
}

type Currency = string;

type MaxConversions = Record<Currency, Record<Currency, number>>;

export class PaymentPageWrapper {
  private _balance: Balance = { amount: 0, currency: "GBP" };
  private _maxConversions: MaxConversions = {};
  private _fromCurrency: Currency;
  private _toCurrency: Currency;
  private _amount: number;
  private _successMessage: string;

  setBalance(amount: number, currency: Currency) {
    console.log(`set balance of ${currency} to ${amount}`);

    this._balance = { amount, currency };
  }

  setMaxConversion(
    fromCurrency: Currency,
    toCurrency: Currency,
    maxAmount: number
  ) {
    console.log(
      `set max conversion for ${fromCurrency} to ${toCurrency} to ${maxAmount}`
    );

    this._maxConversions[fromCurrency] =
      this._maxConversions[fromCurrency] ?? {};
    this._maxConversions[fromCurrency][toCurrency] = maxAmount;
  }

  setFromCurrency(fromCurrency: Currency) {
    console.log(`set from currency to ${fromCurrency}`);

    this._fromCurrency = fromCurrency;
  }

  setToCurrency(toCurrency: Currency) {
    console.log(`set to currency to ${toCurrency}`);

    this._toCurrency = toCurrency;
  }

  setAmount(amount: number) {
    console.log(`set amount to ${amount}`);

    this._amount = amount;
  }

  loginAs(userType: string) {
    console.log(`log in as ${userType}`);
  }

  private _isOverMaxCurrency() {
    return (
      this._amount > this._maxConversions[this._fromCurrency][this._toCurrency]
    );
  }

  get errorMessage() {
    if (this._isOverMaxCurrency()) {
      return "Currency conversion over daily payment limit";
    }
  }

  get isMaxCurrencyButtonVisible() {
    return this._isOverMaxCurrency();
  }

  clickMaxCurrencyButton() {
    console.log(`click max currency button`);

    this._amount = this._maxConversions[this._fromCurrency][this._toCurrency];
  }

  get amount() {
    return this._amount;
  }

  clickSubmit() {
    console.log(`click submit button`);

    if (this._isOverMaxCurrency()) {
      return;
    }

    this._successMessage = "Payment successful";
  }

  get successMessage() {
    return this._successMessage;
  }
}
