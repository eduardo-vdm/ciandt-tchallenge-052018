package eddvdm.ciandt.api.domain;

import javax.persistence.*;

/**
 * Transaction entity.
 */
@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue()
//    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private int account;

    @Column(nullable = false)
    private float value;

    @Column(nullable = false)
    String operation;

    public Transaction() {
    }

    public Transaction(long id, int account, float value, String operation) {
        this.id = id;
        this.account = account;
        this.value = value;
        this.operation = operation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAccount() {
        return account;
    }

    public void setAccount(int account) {
        this.account = account;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }
}
