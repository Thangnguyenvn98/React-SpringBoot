package com.thangnguyen.Employee.model;

import lombok.Data;
//create an employee objects using data created from entity
@Data
public class Employee {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
