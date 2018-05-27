package eddvdm.ciandt.api.service;

import eddvdm.ciandt.api.dao.jpa.AccountRepository;
import eddvdm.ciandt.api.dao.jpa.TransactionRepository;
import eddvdm.ciandt.api.domain.Account;
import eddvdm.ciandt.api.domain.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    public AccountService() {
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Optional<Account> getAccount(long accountId) {
        return accountRepository.findById(accountId);
    }

    public void updateAccount(Account account) {
        accountRepository.save(account);
    }

    public void deleteAccount(Account account) {
        accountRepository.delete(account);
    }

    public List<Account> getAll() {
        return accountRepository.findAll();
    }

    public List<Transaction> getTransactions(long accountId) {
        return transactionRepository.findByAccount(accountId);
    }
    public List<Transaction> getTransactions(Account account) {
        return getTransactions(account.getId());
    }
}
