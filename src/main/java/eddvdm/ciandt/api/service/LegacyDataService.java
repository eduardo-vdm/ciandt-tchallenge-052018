package eddvdm.ciandt.api.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import eddvdm.ciandt.api.domain.Account;
import eddvdm.ciandt.api.domain.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Imports and provides legacy transactions data from file.
 */
@Service
public class LegacyDataService {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    /**
     * Location to legacy data json file.
     */
    @Value("${json.legacyDataFilePath}")
    String jsonlegacyDataFilePath;

    /**
     * Transactions imported from legacy data file.
     */
    private static List<Transaction> transactions = new ArrayList<>();

    /**
     * Fetches and maps legacy transactions records.
     * Runs at initialization and throws explicit exceptions, since it's essential for the application.
     * @throws IOException
     * @throws URISyntaxException
     */
    @PostConstruct
    public void init() throws IOException, URISyntaxException {
        fetchLegacyDataTransactions();
    }

    /**
     * Maps transactions records from legacy data file to local static list.
     * @throws IOException
     * @throws URISyntaxException
     */
    private void fetchLegacyDataTransactions() throws IOException, URISyntaxException {
        // get legacy data json file
        File file = getLegacyDataFile();

        // map legacy data to Transactions
        ObjectMapper jsonMapper = new ObjectMapper();
        setTransactions(jsonMapper.readValue(file, new TypeReference<List<Transaction>>(){}));

        // persist into datasource
        persistLegacyData();
    }

    /**
     * Returns legacy data file.
     * @return File
     * @throws URISyntaxException
     */
    private File getLegacyDataFile() throws URISyntaxException {
        URL url = this.getClass().getClassLoader().getResource(jsonlegacyDataFilePath);
        return new File(url.toURI());
    }

    /**
     * Insert legacy data into application's datasource.
     */
    private void persistLegacyData() {
        // unique accounts ids to persist on accounts table
        Set<Long> uniqueAccountsIds = new HashSet<Long>();

        // create accounts and transactions in datasource
        for (Transaction transaction : getTransactions()) {
            // create account if it doesn't exist
            if (!uniqueAccountsIds.contains(transaction.getAccount())) {
                Account account = new Account(transaction.getAccount());
                this.accountService.createAccount(account);

                uniqueAccountsIds.add(transaction.getAccount());
            }

            this.transactionService.createTransaction(transaction);
        }
    }

    /**
     * Returns list of transactions imported from legacy data file.
     * @return List<Transaction>
     */
    public static List<Transaction> getTransactions() {
        return transactions;
    }

    private void setTransactions(List<Transaction> transactions) {
        LegacyDataService.transactions = transactions;
    }
}
