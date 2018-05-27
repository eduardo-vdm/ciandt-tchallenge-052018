package eddvdm.ciandt.api.rest;

import eddvdm.ciandt.api.domain.Transaction;
import eddvdm.ciandt.api.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/v1/transactions")
public class TransactionRestController extends AbstractRestController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping(value = "", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    List<Transaction> getAllTransactions(HttpServletRequest request,
                                 HttpServletResponse response) {
        return this.transactionService.getAll();
    }

    @GetMapping(value = "/{transactionId}", produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public
    @ResponseBody
    Optional<Transaction> getTransaction(@PathVariable("transactionId") Long transactionId,
                                 HttpServletRequest request,
                                 HttpServletResponse response) {
        return this.transactionService.getTransaction(transactionId);
    }
}
