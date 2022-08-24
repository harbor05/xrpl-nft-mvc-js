/**
 * @class View
 *
 * Controller에서 바인딩
 */
class AccountView {
  constructor() {
    this.app = this.getElement("#root");

    this.createInput({
      key: "inputAccount",
      type: "text",
      placeholder: "Account",
      account: "account",
    });

    // devnet
    this.createInput({
      type: "radio",
      id: "dn",
      name: "server",
      value: "wss://s.devnet.rippletest.net:51233",
    });

    // XLS20-NFT
    this.createInput({
      type: "radio",
      id: "xls",
      name: "server",
      value: "wss://xls20-sandbox.rippletest.net:51233",
    });
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  createInput(
    { key, type, placeholder, account } = {
      key: "default",
      type: "text",
      placeholder: "default",
      account: "default",
    }
  ) {
    this[key] = this.createElement("input");
    this[key].type = type;
    this[key].placeholder = placeholder;
    this[key].account = account;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  bindAddAccount() {}

  displayAccount() {}

  displayNFTokens() {}
}
