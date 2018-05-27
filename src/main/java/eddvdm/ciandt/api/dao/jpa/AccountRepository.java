package eddvdm.ciandt.api.dao.jpa;

import eddvdm.ciandt.api.domain.Account;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface AccountRepository extends PagingAndSortingRepository<Account, Long> {
    List<Account> findAll();
}
