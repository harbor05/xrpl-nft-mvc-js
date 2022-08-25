/**
 * @class Controller
 *
 * 뷰와 입력 값의 바인딩
 *
 * @param model - accountService(Account)
 * @param view - accountView
 */
class AccountController {
  constructor(accountService, accountView) {
    this.accountService = accountService;
    this.accountView = accountView;
  }
}
