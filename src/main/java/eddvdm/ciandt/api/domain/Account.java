package eddvdm.ciandt.api.domain;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

/**
 * Account entity.
 */
@Entity(name = "Account")
@Table(name = "account")
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Account {
    @Id
//    @GeneratedValue()
    private long id;

//    private List<Transaction> transactions;
    @OneToMany(
        cascade = CascadeType.ALL,
        fetch = FetchType.LAZY,
        orphanRemoval = true
    )
    @JoinColumn(name = "account")
    private List<Transaction> transactions = new ArrayList<>();

    public Account() {
    }

    public Account(long id) {
        this.id = id;
    }

//    public Account(long id, List<Transaction> transactions) {
//        this.id = id;
//        this.transactions = transactions;
//    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

//    public List<Transaction> getTransactions() {
//        return transactions;
//    }
//
//    public void setTransactions(List<Transaction> transactions) {
//        this.transactions = transactions;
//    }
}
