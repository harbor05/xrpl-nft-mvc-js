/**
 * @class View
 *
 * Controller에서 바인딩
 */
class AccountView {
  constructor() {
    this.app = this.getElement("#root");

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

    /* Create Account */
    this.createInput({
      id: "getNewStandbyAccount",
      type: "button",
      value: "",
    });

    this.createInput({
      id: "standbyAccountField",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbyPubKeyField",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbyPrivKeyField",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbySeedField",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbyBalanceField",
      type: "text",
      value: "",
    });
    /* End Create Account */

    /* Start Mint NFToken */
    this.createInput({
      id: "mintNftoken",
      type: "button",
      value: "",
    });

    this.createInput({
      id: "nftokenUrl",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbyFlagsField",
      type: "text",
      value: "",
    });

    this.createInput({
      id: "standbyTransferFeeField",
      type: "text",
      value: "",
    });
    /* End Mint NFToken */

    /* Start Burn NFToken */
    this.createInput({
      id: "burnNftoken",
      type: "button",
      value: "",
    });
    /* End Burn NFToken */

    /* Start NFToken */
    this.createInput({
      id: "standbyTokenIdField",
      type: "button",
      value: "",
    });

    this.createInput({
      id: "standbyTokenUrlField",
      type: "button",
      value: "",
    });

    this.createInput({
      id: "standbyTransferFeeField",
      type: "button",
      value: "",
    });
    /* End NFToken */
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  createInput(
    { key, type, account, value, id } = {
      id: "default",
      key: "default",
      type: "text",
      account: "default",
      value: "",
    }
  ) {
    this[key] = this.createElement("input");
    this[key].id = id;
    this[key].type = type;
    this[key].account = account;
    this[key].value = value;
  }

  createButton({} = {}) {}

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  bindAddAccount() {}

  displayAccount() {}

  displayNFTokens() {}
}
