package com.thangnguyen.Employee.services;

import java.util.List;

import com.thangnguyen.Employee.model.Employee;

public interface EmployeeService{

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

}