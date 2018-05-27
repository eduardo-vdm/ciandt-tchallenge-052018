package eddvdm.ciandt.api.rest;

import eddvdm.ciandt.api.domain.Account;
import eddvdm.ciandt.api.domain.Transaction;
import eddvdm.ciandt.api.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/v1/accounts")
public class AccountRestController extends AbstractRestController {

    @Autowired
    private AccountService accountService;

    @GetMapping(value = "", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    List<Account> getAllAccounts(HttpServletRequest request,
                                 HttpServletResponse response) {
        return this.accountService.getAll();
    }

    @GetMapping(value = "/{accountId}", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    Optional<Account> getAccount(@PathVariable("accountId") Long accountId,
                                 HttpServletRequest request,
                                 HttpServletResponse response) {
        Optional<Account> acc = this.accountService.getAccount(accountId);
        return this.accountService.getAccount(accountId);
    }

    @GetMapping(value = "/{accountId}/transactions", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    List<Transaction> getAccountTransactions(@PathVariable("accountId") Long accountId,
                                             HttpServletRequest request,
                                             HttpServletResponse response) {
        return this.accountService.getTransactions(accountId);
    }
}
