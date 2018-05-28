package eddvdm.ciandt.api.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Transaction entity.
 */
@Entity(name = "Transaction")
@Table(name = "transaction")
public class Transaction {

    @Id
//    @GeneratedValue()
    private long id;

    @Column(nullable = false)
    private long account;

    @Column(nullable = false)
    private float value;

    @Column(nullable = false)
    String operation;

    @Column(nullable = false)
    String source;

    @Column(nullable = false)
    Date datetime;

    public Transaction() {
    }

    public Transaction(long id, long account, float value, String operation, String source, Date datetime) {
        this.id = id;
        this.account = account;
        this.value = value;
        this.operation = operation;
        this.source = source;
        this.datetime = datetime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getAccount() {
        return account;
    }

    public void setAccount(long account) {
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

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }
}
