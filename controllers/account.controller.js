/**
 * @class Controller
 *
 * @param model
 * @param view
 */
class AccountController {
  constructor(accountService, accountView) {
    this.accountService = accountService;
    this.accountView = accountView;
  }
}
