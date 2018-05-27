package eddvdm.ciandt.api.dao.jpa;

import eddvdm.ciandt.api.domain.Transaction;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long> {
    List<Transaction> findAll();
    List<Transaction> findByAccount(long account);
}
