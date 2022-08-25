/**
 * @class Model - Account
 *
 * @param account
 * @param secret
 */
class Account {
  constructor(account, secret) {
    this.account = account;
    this.secret = secret;
    this.xrpl = xrpl;
    console.log("AccountController Call XRPL", this.xrpl);
  }

  /**
   * Get the Preferred Network
   */
  getNet() {}

  initNetwork() {}

  /**
   * Get Account
   */
  getAccount() {}
}
