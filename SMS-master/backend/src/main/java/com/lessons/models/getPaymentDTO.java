package com.lessons.models;

import java.util.Date;

public class getPaymentDTO {

    private int id;
    private int studentID;
    private Date paymentDate;
    private int paymentAmount;
    private int previousBalance;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStudentID() {
        return studentID;
    }

    public void setStudentID(int studentID) {
        this.studentID = studentID;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public int getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(int paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public int getPreviousBalance() {
        return previousBalance;
    }

    public void setPreviousBalance(int previousBalance) {
        this.previousBalance = previousBalance;
    }
}
